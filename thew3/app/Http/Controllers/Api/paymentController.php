<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;
use App\Model\paymentModel;
use App\Model\orderModel;
use JWTAuth;
use JWTFactory;
use Razorpay\Api\Api;

class paymentController extends Controller
{
    public function __construct()
    {
         $this->paymentModel = new paymentModel();
         $this->orderModel = new orderModel();
    }

    public function getPaymenDetails(Request $request) {
        $return = array();
        $responce = array();
        $returnData = array();

        $errors_message = "";
        $request_data = $request->all();

        $session_data = $request->session()->get('thew_session');

        if(isset($session_data['offer_data']))
        {
            unset($session_data['offer_data']);
            $request->session()->put('thew_session', $session_data);
        }

        $user_id = $session_data['user_id'];

        $request_data['order_id'] = \Helpers::data_decode($request_data['order_id']);

        $responce = $this->paymentModel->getOrderDetails($request_data);
        
        if(count($responce) == 1)
        {
            if($responce[0]->user_id == $user_id)
            {
                //This code for encoding order ID
                $responce[0]->order_id = \Helpers::data_encode($responce[0]->order_id);

                $returnData['payment_details'] = $responce;

                // if(isset($session_data['offer_data']))
                // {
                //     $returnData['offer_data'] = $session_data['offer_data'];
                // }

                $return['DATA'] = $returnData;
                $return['ERROR_CODE'] = '0';
                $return['ERROR_DESCRIPTION'] = '';
            }else{
                $return['DATA'] = '';
                $return['ERROR_CODE'] = '1';
                $return['ERROR_DESCRIPTION'] = 'Invalid Order.';
            }
            
        }else{
            $return['DATA'] = '';
            $return['ERROR_CODE'] = '1';
            $return['ERROR_DESCRIPTION'] = 'Invalid Order.';
        }

        return json_encode($return);
    }

    public function paymentInitiate(Request $request) {

        $return = array(); 
        $errors_message = "";
    	$request_data = $request->all();
        
        $request_data['order_id'] = \Helpers::data_decode($request_data['order_id']);

      	$paymentId =  $this->paymentModel->storeDataInTempTransaction($request_data);

        if($paymentId['ERROR_CODE'] == 0)
        {
            $response = array(
              "transaction_id" => $paymentId['DATA']
            );

            $return['DATA'] = $response;
            $return['ERROR_CODE'] = '0';
            $return['ERROR_DESCRIPTION'] = '';
        }else{
            $return['DATA'] = '';
            $return['ERROR_CODE'] = '2';
            $return['ERROR_DESCRIPTION'] = $paymentId['ERROR_DESCRIPTION'];
        }

        return json_encode($return);

    }

    public function storeTransData(Request $request) {
        
        $return = array();
        $request_data = $request->all();
        $transaction_error_msg = "";

        $session_data = $request->session()->get('thew_session');

        $userid = $session_data['user_id'];

        if($request_data['transaction_id'] != "")
        { 
            //This api for getting transaction data
            $api = new Api(\Config::get('constant.RAZOR_KEY'), \Config::get('constant.RAZOR_SECRET'));

            $payment = $api->payment->fetch($request_data['transaction_id']);
            
            $raw_data = json_encode($payment->toArray());

            if(!isset($payment['error']))
            {
                $order_id = $payment['notes']['id'];
                $order_encode_id = $payment['notes']['order_id'];
                //This code for encoding order ID
                $order_encode_id = \Helpers::data_decode($order_encode_id);

                $transaction_id = $payment['id'];
                
                $postData = array(
                    "temp_transaction_unique_id" => $order_id
                );

                $total_amount = $payment['amount']/100;

                //This function for checking transaction is available or not
                $payment_temp_data =  $this->paymentModel->checkTransaction($postData);

                if(count($payment_temp_data) == 1)
                { 
                    $temp_transaction_id = $payment_temp_data[0]->temp_transaction_id;

                    //This code for storing data in the transaction table
                    $insert_array = array(
                          "temp_transaction_id" => $payment_temp_data[0]->temp_transaction_id,
                          "transaction_id" => $transaction_id,
                          "order_id" => $payment_temp_data[0]->order_id,
                          "user_id" => $payment_temp_data[0]->user_id,
                          "amount_of_order" => $payment_temp_data[0]->amount_of_order,
                          "offer_id" => $payment_temp_data[0]->offer_id,
                          "offer_amount" => $payment_temp_data[0]->offer_amount,
                          "wallet_amount" => $payment_temp_data[0]->wallet_amount,
                          "status" => "Success",
                          "total_amount" => $total_amount,
                          "raw_data" => $raw_data,
                      );

                    if($total_amount == $payment_temp_data[0]->total_amount)
                    {
                        //This update array for temp transaction
                        $update_array = array(
                            "status" => "Success",
                            "transaction_id" => $transaction_id,
                            "updated_at" => date("Y-m-d H:i:s")
                        );

                        //This code for update data in temp transaction table
                        $update_data =  $this->paymentModel->updateTempTransactionData($temp_transaction_id,$update_array);

                        //This code for updating status in order table
                        $order_update_array = array(
                            "status" => "Payment Done",
                            "updated_at" => date("Y-m-d H:i:s")
                        );

                        $update_data =  $this->orderModel->updateOrderData($order_encode_id,$order_update_array);

                        $insert_array['status'] = "Success";
                        $insert_array['temp_transaction_unique_id'] = $payment_temp_data[0]->temp_transaction_unique_id;
                        
                        $returnData = array(
                            "transaction_id" => $payment_temp_data[0]->temp_transaction_unique_id
                        );

                        $return['DATA'] = $returnData;
                        $return['ERROR_CODE'] = '0';
                        $return['ERROR_DESCRIPTION'] = '';

                    }else{
                        $transaction_error_msg = "Transaction Amount is mismatch.";

                        //This code for storing transaction error message
                        $update_array = array(
                            "status" => "Initiate",
                            "transaction_id" => $transaction_id,
                            "transaction_error_msg" => $transaction_error_msg,
                            "updated_at" => date("Y-m-d H:i:s")
                        );

                        //This code for update data in temp transaction table
                        $update_data =  $this->paymentModel->updateTempTransactionData($temp_transaction_id,$update_array);

                        //This code for stroring data in the transaction table
                        $insert_array['transaction_error_msg'] = $transaction_error_msg;
                        $insert_array['status'] = "Pending";

                        $return['DATA'] = '';
                        $return['ERROR_CODE'] = '1';
                        $return['ERROR_DESCRIPTION'] = 'Your amount is not match with existing amount, please contact with our customer service.';

                    }
                    
                }else{
                    $transaction_error_msg = "Temp Transaction unique ID not present.";

                    $insert_array = array(
                          "transaction_id" => $transaction_id,
                          "temp_transaction_unique_id" => $order_id,
                          "user_id" => $userid,
                          "transaction_error_msg" => $transaction_error_msg,
                          "total_amount" => $total_amount,
                          "raw_data" => $raw_data,
                      );

                    $return['DATA'] = '';
                    $return['ERROR_CODE'] = '1';
                    $return['ERROR_DESCRIPTION'] = 'Transaction ID is invalid, please try again.';

                }
              
                //This code for storing data in transaction table
                $response_data =  $this->paymentModel->storeDataInTransaction($insert_array);
                
            }else{
                $return['DATA'] = '';
                $return['ERROR_CODE'] = '1';
                $return['ERROR_DESCRIPTION'] = 'Payment gateway in service mode. Please wait.';
            }
                             
        }else{
            $return['DATA'] = '';
            $return['ERROR_CODE'] = '1';
            $return['ERROR_DESCRIPTION'] = 'Something is wrong. We will get back to you.';
        }

        return json_encode($return);
    }

    public function getTransactionData(Request $request) {
        $return = array();
        $request_data = $request->all();

        $postData = array(
            "temp_transaction_unique_id" => $request_data['transaction_id']
        );

        $transactionData =  $this->paymentModel->getTransactionDataUsingTempId($postData);

        if(count($transactionData) != 0)
        {
            $return['DATA'] = $transactionData;
            $return['ERROR_CODE'] = '0';
            $return['ERROR_DESCRIPTION'] = '';
        }else{
            $return['DATA'] = $postData;
            $return['ERROR_CODE'] = '1';
            $return['ERROR_DESCRIPTION'] = 'Transaction Failed.';
        }

        return json_encode($return);
    }

}
