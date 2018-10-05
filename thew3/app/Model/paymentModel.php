<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model; 
use DB;
use Session;
use App\Model\orderModel;

class paymentModel extends Model
{
    protected $temp_transaction_table = 'temp_transaction_table';
    protected $transaction_table = 'transaction_table';
    protected $orders = 'orders';
    protected $service_table = 'services';
    
    public function __construct()
    {
         $this->orderModel = new orderModel();
    }

    public function storeDataInTempTransaction($postData)
    {
        $return = array(); 
        $session_data = session('thew_session');
        $user_id = session('thew_session')['user_id'];

        //This code for getting order data of the user
        $condition = array(
            "order_id" => $postData['order_id'],
            "user_id" => $user_id
        );
        $getOrderData =  $this->orderModel->getUserOrderData($condition);

        if($getOrderData->isEmpty()){
            
            $return['DATA'] = '';
            $return['ERROR_CODE'] = '2';
            $return['ERROR_DESCRIPTION'] = 'Order Not present.';

            return $return;
        }

		$temp_transaction_unique_id = \Helpers::genRandomCode(16);

        $total_amount = $getOrderData[0]->total_amount;
        $amount_of_order = $getOrderData[0]->amount_of_order;
        $offer_discount = 0;

    	$insertArr = array(
            "order_id" => $postData['order_id'],
    		"user_id" => $user_id,
            "amount_of_order" => $getOrderData[0]->amount_of_order,
            "temp_transaction_unique_id" => $temp_transaction_unique_id
    	);

        //This code for storing promocode data
        if(isset($session_data['offer_data']))
        {
            $offer_data = $session_data['offer_data'];
            $insertArr['offer_id'] = $offer_data->offer_id;
            $offer_amount = $offer_data->offer_amount;

            if($offer_data->offer_amount_type == "percent")
            {
                $offer_discount = ($amount_of_order/100)*$offer_amount;
            }else{
                $offer_discount = $offer_amount;
            }

            $total_amount = $total_amount - $offer_discount;

            $insertArr['offer_amount'] = $offer_discount;
             
        }

        $insertArr['total_amount'] = $total_amount;

    	$responce_id = DB::table($this->temp_transaction_table)->insertGetId($insertArr);

        $return['DATA'] = $temp_transaction_unique_id;
        $return['ERROR_CODE'] = '0';
        $return['ERROR_DESCRIPTION'] = '';

    	return $return;
    }

    
    public function checkTransaction($postData)
    {
        $responce = DB::table($this->temp_transaction_table)->select('temp_transaction_id','temp_transaction_unique_id','order_id','user_id','amount_of_order','offer_id','offer_amount','wallet_amount','total_amount','status')->where('temp_transaction_unique_id',$postData['temp_transaction_unique_id'])->get();

        return $responce;
    }

    public function getTransactionDataUsingTempId($postData)
    {
        $responce = DB::table($this->transaction_table." as t")->select('temp_transaction_id','temp_transaction_unique_id','t.amount_of_order','t.offer_id','t.offer_amount','t.wallet_amount','t.total_amount','t.status','transaction_error_msg','t.created_at','o.order_unique_id','o.order_id')->leftJoin($this->orders." as o", 'o.order_id', '=', 't.order_id')->where('t.temp_transaction_unique_id',$postData['temp_transaction_unique_id'])->get();

        return $responce;
    }

    public function storeDataInTransaction($postData)
    {
        $responce_id = DB::table($this->transaction_table)->insertGetId($postData);

        return $responce_id;
    }

    public function updateTempTransactionData($id,$updateData)
    {
        $responce = DB::table($this->temp_transaction_table)->where('temp_transaction_id', $id)->update($updateData);
        return $responce;
    }

    public function getOrderDetails($postData)
    {
        $responce = DB::table($this->orders." as o")->select('order_id','order_unique_id','user_id','service_ids','order_date','pick_up_slot','weight_of_order','amount_of_order','total_amount','status','s.type')->join($this->service_table." as s", 's.service_id', '=', 'o.service_ids')->where('o.order_id',$postData['order_id'])->get();

        return $responce;
    }
    
}
