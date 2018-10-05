<?php

namespace App\Http\Controllers; 

use Illuminate\Http\Request;
use Validator;
use App\Model\userModel;
use App\Model\orderModel;
use App\Model\servicesModel;
use App\Model\offerModel;
use JWTAuth;
use JWTFactory; 
// use Session;

class apiController extends Controller
{
    public function __construct()
    {
         $this->user = new userModel();
         $this->orderModel = new orderModel();
         $this->servicesModel = new servicesModel();
         $this->offerModel = new offerModel();
    }

    public function getLoginData(Request $request) {

        $return = array(); 
        $errors_message = "";
    	$request_data = $request->all();
       
       //This for validation
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:2',
            'mobile' => 'required|numeric', 
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors()->all();
            foreach ($errors as $key => $value) {
                $errors_message .= $value."\n";
            }

            $return['DATA'] = '';
            $return['ERROR_CODE'] = '2';
            $return['ERROR_DESCRIPTION'] = $errors_message;
        }else{

            $name = "";
            $mobile = "";

            $postData = array(
                "name" => $request_data['name'],
                "mobile" => $request_data['mobile']
            );
            //This code for getting data of user
            $checkUser =  $this->user->checkUser($postData);

            if(count($checkUser) == 0)
            {
                $id =  $this->user->insertUserData($postData);

                $name = $request_data['name'];
                $mobile = $request_data['mobile'];

            }else{
                $id = $checkUser[0]->id;

                $name = $checkUser[0]->name;
                $mobile = $checkUser[0]->mobile;
            }

            //This code for creating token
            $payload = JWTFactory::sub(123)->aud('userData')->userData(['id' => $id])->make();
            $token = JWTAuth::encode($payload)->get();

            //This code update data
            $updateData = array(
                    "api_token" => $token,
                );

            $checkUser =  $this->user->updateUserData($id,$updateData);

            //This code for storing data in session
            $sesionData = array(
                "login_token" => $token,
                "user_id" => $id,
                "name" => $name,
                "mobile" => $mobile,
            );

            $request->session()->put('thew_session', $sesionData);
         
            $return['DATA'] = $token;
            // $return['session'] = $request->session()->get('thew_session'); 
            $return['ERROR_CODE'] = '0';
            $return['ERROR_DESCRIPTION'] = '';
        }

        return json_encode($return);

    }

    public function logout(Request $request) {

        $return = array();

        // if ($request->session()->has('thew_session')) {
            $request->session()->forget('thew_session');
        // }

        $return['DATA'] = "";
        $return['ERROR_CODE'] = '0';
        $return['ERROR_DESCRIPTION'] = '';

        return $return; 

    }

    public function verifyOtp(Request $request) {

        $return = array();

        $request_data = $request->all();
       
        // if (session()->has('temp_user_details')) {
            
            if($request_data['otp'] == 888888)
            {
                // $user = new userModel();
                // $userdata =  $this->user->getUserData();
                
                $return['DATA'] = "";
                $return['ERROR_CODE'] = '0';
                $return['ERROR_DESCRIPTION'] = '';
            }else{
                $return['DATA'] = '';
                $return['ERROR_CODE'] = '2';
                $return['ERROR_DESCRIPTION'] = 'Invalid OTP.';
            }
           
        // }else{
        //     $return['DATA'] = '';
        //     $return['ERROR_CODE'] = '2';
        //     $return['ERROR_DESCRIPTION'] = 'Something is wrong.';
        // }
        return $return; 

    }

    public function checklogin(Request $request) {

        $return = array();

        $request_data = $request->all();

        $login = false;    

        if ($request->session()->has('thew_session')) {
            $session_data = $request->session()->get('thew_session');
            if($session_data['login_token'] == $request_data['token_id'])
            {
                $userData = $session_data;
                $login = true; 
            }
        }
        
        if($login)
        {
            
            $return['DATA'] = $userData;
            $return['ERROR_CODE'] = '0';
            $return['ERROR_DESCRIPTION'] = '';
        }else{
            $return['DATA'] = '';
            $return['ERROR_CODE'] = '2';
            $return['ERROR_DESCRIPTION'] = '';
        }
        
        return json_encode($return);

    }
    
    public function checknotlogin(Request $request) {
        $return = array();

        $request_data = $request->all();

        if (!$request->session()->has('thew_session')) {

            $getlogintoken =  $this->user->getLoginToken($request_data);

            if(count($getlogintoken) == 1)
            {
                $sesionData = array(
                    "login_token" => $getlogintoken[0]->api_token,
                    "user_id" => $getlogintoken[0]->id,
                    "name" => $getlogintoken[0]->name,
                    "mobile" => $getlogintoken[0]->mobile,
                );

                // session()->put('thew_session', $sesionData);
                $request->session()->put('thew_session', $sesionData);

                $return['DATA'] = '';
                $return['ERROR_CODE'] = '2';
                $return['ERROR_DESCRIPTION'] = '';

            }else{
                $return['DATA'] = '';
                $return['ERROR_CODE'] = '0';
                $return['ERROR_DESCRIPTION'] = '';
            }
            
        }else{
            $return['DATA'] = '';
            $return['ERROR_CODE'] = '2';
            $return['ERROR_DESCRIPTION'] = '';
        }

        return json_encode($return);
    }

    public function getdata(Request $request) {

    	$arrayData = array();
    	$arrayData[] = array("id"=>1,"name"=>"sagar");
    	$arrayData[] = array("id"=>2,"name"=>"bele");
    	// $request_data = $request->all();
        return json_encode($arrayData); 
    }

    public function getOrderData(Request $request) {

        $return = array();

        $errors_message = "";
        $request_data = $request->all();

        $validator = Validator::make($request->all(), [
            'pick_up_date' => 'required',
            'slot' => 'required', 
            'services' => 'required', 
            'name' => 'required', 
            'mobile' => 'required', 
            'address' => 'required', 
            'landmark' => 'required', 
            'pincode' => 'required', 
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors()->all();
            foreach ($errors as $key => $value) {
                $errors_message .= $value."\n";
            }

            $return['DATA'] = '';
            $return['ERROR_CODE'] = '2';
            $return['ERROR_DESCRIPTION'] = $errors_message;
        }else{
            
            $responce = $this->orderModel->storeOrderData($request_data); 

            if($responce > 0)
            {
                $condition = array(
                    "service_id" => $request_data['services']
                );

                $service_data = $this->servicesModel->getServiceData($condition);

                $order_id = $responce;

                $product_data = array(
                    "order_id" => $order_id,
                    "service_id" => $request_data['services'],
                    "service_amount" => $service_data[0]->service_price,
                );

                $product_response = $this->servicesModel->addProductData($product_data);

                $data = array(
                    "responce_id" => $responce
                );

                $return['DATA'] = $data;
                $return['ERROR_CODE'] = '0';
                $return['ERROR_DESCRIPTION'] = '';
            }else{
                $return['DATA'] = '';
                $return['ERROR_CODE'] = '2';
                $return['ERROR_DESCRIPTION'] = "Something is wrong with your data, please try again.";
            }
        }

        return json_encode($return);

    }

    public function getOrderlist(Request $request) {

        $return = array();

        $errors_message = "";
        $request_data = $request->all();

        $userid = 2;
        $request_data["user_id"] = $userid; 

        $responce = $this->orderModel->getOrderListData($request_data);

        //This code for encoding data
        foreach ($responce as $key => $value) {
            $responce[$key]->order_id = \Helpers::data_encode($value->order_id);
        }

        $return['DATA'] = $responce;
        $return['ERROR_CODE'] = '0';
        $return['ERROR_DESCRIPTION'] = '';

        return json_encode($return); 
        
    }
    
    public function getOrderDetails(Request $request) {
        $return = array();

        $errors_message = "";
        $request_data = $request->all();

        $request_data['order_id'] = \Helpers::data_decode($request_data['order_id']);

        $responce = $this->orderModel->getOrderDetails($request_data);

        if(count($responce) == 1)
        {
            $responce[0]->order_id = \Helpers::data_encode($responce[0]->order_id);
        }

        $return['DATA'] = $responce;
        $return['ERROR_CODE'] = '0';
        $return['ERROR_DESCRIPTION'] = '';

        return json_encode($return);
    }

    public function getLastOrderData(Request $request) {
        $return = array();
        $responce = array();
        
        $errors_message = "";
        $request_data = $request->all();

        $session_data = $request->session()->get('thew_session');

        $userid = $session_data['user_id'];
        $request_data["user_id"] = $userid; 

        $orderData = $this->orderModel->getLastOrderData($request_data);
        $serviceData = $this->orderModel->getServiceOrderData();

        $responce['order_data'] = $orderData;
        $responce['service_data'] = $serviceData;

        $return['DATA'] = $responce;
        $return['ERROR_CODE'] = '0';
        $return['ERROR_DESCRIPTION'] = '';

        return json_encode($return);
    }

    public function getServicesData(Request $request) {
        $return = array();

        $errors_message = "";
        $request_data = $request->all();

        $session_data = $request->session()->get('thew_session');

        $responce = $this->servicesModel->getServices($request_data);

        $return['DATA'] = $responce;
        $return['ERROR_CODE'] = '0';
        $return['ERROR_DESCRIPTION'] = '';

        return json_encode($return);
    }

    public function getServicesCategoriesData(Request $request) {
        $return = array();

        $errors_message = "";
        $request_data = $request->all();

        $session_data = $request->session()->get('thew_session');

        $responce = $this->servicesModel->getServicesCategories($request_data);

        $return['DATA'] = $responce;
        $return['ERROR_CODE'] = '0';
        $return['ERROR_DESCRIPTION'] = '';

        return json_encode($return);
    }

    public function getCategoryTypeData(Request $request) {
        $return = array();

        $errors_message = "";
        $request_data = $request->all();

        $session_data = $request->session()->get('thew_session');

        $responce = $this->servicesModel->getCategoryTypeData($request_data);

        $return['DATA'] = $responce;
        $return['DATA1'] = $request_data;
        $return['ERROR_CODE'] = '0';
        $return['ERROR_DESCRIPTION'] = '';

        return json_encode($return);
    }

    public function cancleOrder(Request $request) {
        $return = array();

        $errors_message = "";
        $request_data = $request->all();

        //This code update data
        $updateData = array(
            "status" => "Cancelled",
        );

        // $session_data = $request->session()->get('thew_session');

        $responce = $this->orderModel->updateOrderData($request_data['order_id'],$updateData);

        $return['DATA'] = '';
        $return['ERROR_CODE'] = '0';
        $return['ERROR_DESCRIPTION'] = '';

        return json_encode($return);
    }

    public function getOfferData(Request $request) {
        $return = array();
        $response = array();
        
        $errors_message = "";
        $request_data = $request->all();

        $offer_data = $this->offerModel->getOfferData();
        
        $response['offer_data'] = $offer_data;
       
        $return['DATA'] = $response;
        $return['ERROR_CODE'] = '0';
        $return['ERROR_DESCRIPTION'] = '';

        return json_encode($return);
    }

    public function checkPromocode(Request $request) {
        $return = array();
        $response = array();
        
        $errors_message = "";
        $request_data = $request->all();

        $session_data = $request->session()->get('thew_session');

        $validator = Validator::make($request->all(), [
            'promocode' => 'required|min:3',
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors()->all();
            foreach ($errors as $key => $value) {
                $errors_message .= $value."\n";
            }

            $return['DATA'] = '';
            $return['ERROR_CODE'] = '2';
            $return['ERROR_DESCRIPTION'] = $errors_message;
        }else{

            $offer_data = $this->offerModel->checkPromocode($request_data);
            if(count($offer_data) == 1)
            {
                $response = $offer_data[0];
                $session_data['offer_data'] = $offer_data[0];

                $request->session()->put('thew_session', $session_data);
                
                $session_data = $request->session()->get('thew_session');

                // $return['DATA'] = $response['offer_data'];
                $return['DATA'] = $response;
                $return['ERROR_CODE'] = '0';
                $return['ERROR_DESCRIPTION'] = '';
            }else{
                $return['DATA'] = '';
                $return['ERROR_CODE'] = '1';
                $return['ERROR_DESCRIPTION'] = 'Invalid Promocode.';
            }
        }
        return json_encode($return);
    }

    public function cancleOffer(Request $request) {
        $return = array();
        $response = array();

        $session_data = $request->session()->get('thew_session');

        if(isset($session_data['offer_data']))
        {
            unset($session_data['offer_data']);
            $request->session()->put('thew_session', $session_data);
        }

        $return['DATA'] = '';
        $return['ERROR_CODE'] = '0';
        $return['ERROR_DESCRIPTION'] = 'Promocode is removed successfully.';

        return json_encode($return);
    }
}
