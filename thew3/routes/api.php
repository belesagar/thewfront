<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['web','Cors','checklogin']], function () {
	Route::post('checklogin','apiController@checklogin')->name('checklogin');   
});

Route::group(['middleware' => ['web','Cors']], function () {
	Route::post('checknotlogin','apiController@checknotlogin')->name('checknotlogin');   
});

Route::group(['middleware' => ['web','Cors']], function () {
	Route::post('getLoginData','apiController@getLoginData')->name('getLoginData');  
	Route::get('logout','apiController@logout')->name('logout');  
	Route::post('verifyOtp','apiController@verifyOtp')->name('verifyOtp');  
});

Route::group(['middleware' => ['web','Cors']], function () {
	
	Route::get('getData','apiController@getData')->name('getarraydata');  
	Route::post('getOrderData','apiController@getOrderData')->name('getOrderData');  
	Route::get('getOrderlist','apiController@getOrderlist')->name('getOrderlist');  
	Route::post('getOrderDetails','apiController@getOrderDetails')->name('getOrderDetails');  
	Route::get('getLastOrderData','apiController@getLastOrderData')->name('getLastOrderData');  

	//This route for getting services
	Route::get('getServices','apiController@getServicesData')->name('getServices');  
	Route::post('getServiceCategories','apiController@getServicesCategoriesData')->name('getServiceCategories');  
	Route::post('getCategoryTypeData','apiController@getCategoryTypeData')->name('getCategoryTypeData');  

	//This route for cancle order
	Route::post('cancleOrder','apiController@cancleOrder')->name('cancleOrder');  
	
	//This route for payment 
	Route::post('initiate','Api\paymentController@paymentInitiate')->name('initiate');  
	Route::post('storeTransData','Api\paymentController@storeTransData')->name('storeTransData');  

	//This api for getting offer data
	Route::get('getOfferData','apiController@getOfferData')->name('getOfferData');  
	Route::post('checkPromocode','apiController@checkPromocode')->name('checkPromocode');  
	Route::get('cancleOffer','apiController@cancleOffer')->name('cancleOffer');  

	//This code for adding payment route
	Route::post('getPaymenDetails','Api\paymentController@getPaymenDetails')->name('getPaymenDetails');
	Route::post('getTransactionData','Api\paymentController@getTransactionData')->name('getTransactionData');
	

});


Route::group([],function () {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});