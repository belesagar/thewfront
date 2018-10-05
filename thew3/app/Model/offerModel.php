<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use DB;
use Session;

class offerModel extends Model
{
    protected $offers = 'offers';
    
    public function getOfferData()
    {
        $response = DB::table($this->offers)->select('offer_id','offer_code','offer_type','details','offer_amount_type','offer_amount','start_date','end_date','is_active','created_at')->where('is_active','1')->orderBy('offer_id', 'desc')->get();

        return $response;
    }

    public function offer_data($postData)
    {
        $response = DB::table($this->offers)->select('offer_id','offer_code','offer_type','details','offer_amount_type','offer_amount','start_date','end_date','is_active','created_at')->where('is_active','1','offer_code',$postData['promocode'])->get();

        return $response;
    }

    public function checkPromocode($postData)
    {
        $response = DB::table($this->offers)->select('offer_id','offer_code','offer_type','details','offer_amount_type','offer_amount','start_date','end_date','is_active','created_at')->where([['is_active','1'],['offer_code',$postData['promocode']]])->get();

        return $response;
    }

}
