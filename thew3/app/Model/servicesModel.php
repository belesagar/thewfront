<?php

namespace App\Model;
use DB;
use Session;

use Illuminate\Database\Eloquent\Model;

class servicesModel extends Model
{
    protected $services = 'services';
    protected $services_category = 'services_category';
    protected $services_type = 'services_type';
    protected $product_data = 'product_data';

    public function getServices($postData)
    {
        $response = DB::table($this->services." as s")->select('s.service_id','s.city_id','s.type','s.sub_type','s.service_price','s.service_type','s.service_image','s.is_active',DB::raw('count(sc.service_id) as category_count'))->leftJoin($this->services_category." as sc", 'sc.service_id', '=', 's.service_id')->groupBy('s.service_id')->get();

        return $response;
    }

    public function addProductData($postData)
    {
    	$responce_id = DB::table($this->product_data)->insertGetId($postData);

    	return $responce_id;
    }

    public function getServiceData($postData)
    {
        $response = DB::table($this->services)->select('service_id','city_id','type','sub_type','service_price','service_type','service_image','is_active')->where('service_id',$postData['service_id'])->get();

        return $response;
    }

    public function getServicesCategories($postData)
    {
        $response = DB::table($this->services_category)->select('services_category_id','service_id','category_name','is_active')->where([['service_id',$postData['service_id']],['is_active',1]])->get();

        return $response;
    }

    public function getCategoryTypeData($postData)
    {
        $response = DB::table($this->services_type)->select('service_type_id','services_category_id','type_price','type_name','is_active')->where([['services_category_id',$postData['services_category_id']],['is_active','1']])->get();

        return $response;
    }

}
