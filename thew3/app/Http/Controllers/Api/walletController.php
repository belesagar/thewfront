<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\walletModel;
use JWTAuth;
use JWTFactory;
use Razorpay\Api\Api;

class walletController extends Controller 
{
	public function __construct()
    {
         $this->walletModel = new walletModel();
    }

    public function getWalletData(Request $request) {
    	$return = array();
    	$session_data = $request->session()->get('thew_session');
    	$user_id = $session_data['user_id'];
    	$responseData =  $this->walletModel->getLastEntryOfUserWallet($user_id);

        $return['DATA'] = $responseData;
        $return['ERROR_CODE'] = '0';
        $return['ERROR_DESCRIPTION'] = '';

    	return json_encode($return);
    }

    public function getWalletHistory(Request $request) {
        $return = array();
        $session_data = $request->session()->get('thew_session');
        $user_id = $session_data['user_id'];
        $responseData =  $this->walletModel->getUserWalletHistory($user_id);

        $return['DATA'] = $responseData;
        $return['ERROR_CODE'] = '0';
        $return['ERROR_DESCRIPTION'] = '';

        return json_encode($return);
    }
}
