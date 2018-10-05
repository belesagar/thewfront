<?php

$table_prefix = "tbl_fastbanking";

$environment = env('ENVIRONMENT'); 

$instant_cash_data = array();

//This code for setting database as per Environment 
if ($environment == 'local') {

    // $base_url = "http://192.168.1.111/fastbanking/"; 
    // $base_url = "http://192.168.1.99/kissht/"; 
    $base_url = "http://localhost/kissht/";   
    $ncash_url = "http://localhost/ncash/"; 
    $merchant_id = "35918"; 
    //Instant cash
    $instant_sitekey = "wC3FD5c5I0dXyPtCfqZJlCezVK0PsZi3WdvUNq5s";
    $instant_secret_key = "NZ45W3NRQXVN460UCLLE2UPBVOCALGWS";
    
    $instant_sitekey_lowcash = "7fqMcIIn5TXiHPIttXXij1yr89kTjKCLhSdHQw3a";
    $instant_secret_key_lowcash = "VXSCJAG5HLAW5CJDCBDSJ1FJUCURAW4R";

    $instant_cash_data["instant_cash"] = array(
            "site_key" => "wC3FD5c5I0dXyPtCfqZJlCezVK0PsZi3WdvUNq5s",
            "secret_key" => "NZ45W3NRQXVN460UCLLE2UPBVOCALGWS",
    );

    $instant_cash_data["instant_cash_low"] = array(
            "site_key" => "7fqMcIIn5TXiHPIttXXij1yr89kTjKCLhSdHQw3a",
            "secret_key" => "VXSCJAG5HLAW5CJDCBDSJ1FJUCURAW4R",
    );

    //Flipkart/Amazon
    $product_sitekey = "TeiK01punJQ7RxINkeNcSK13i09m57p9heXEAVoP";
    $product_secret_key = "YQZSICKZODOIN0ZRT1ZBZAZIV3B7IVS8";
} elseif ($environment == 'dev') {

    // $base_url = "http://192.168.1.111/fastbanking/"; 
    $base_url = "http://www.dev.kissht.com/kissht/";   
    // $base_url = "http://localhost/fastbanking-core/";  
    $ncash_url = "http://192.168.1.111/ncash/";
    $merchant_id = "35918";

     //Instant cash
    $instant_sitekey = "wC3FD5c5I0dXyPtCfqZJlCezVK0PsZi3WdvUNq5s";
    $instant_secret_key = "NZ45W3NRQXVN460UCLLE2UPBVOCALGWS";

    $instant_sitekey_lowcash = "7fqMcIIn5TXiHPIttXXij1yr89kTjKCLhSdHQw3a";
    $instant_secret_key_lowcash = "VXSCJAG5HLAW5CJDCBDSJ1FJUCURAW4R";

    $instant_cash_data["instant_cash"] = array(
            "site_key" => "wC3FD5c5I0dXyPtCfqZJlCezVK0PsZi3WdvUNq5s",
            "secret_key" => "NZ45W3NRQXVN460UCLLE2UPBVOCALGWS",
    );

    $instant_cash_data["instant_cash_low"] = array(
            "site_key" => "7fqMcIIn5TXiHPIttXXij1yr89kTjKCLhSdHQw3a",
            "secret_key" => "VXSCJAG5HLAW5CJDCBDSJ1FJUCURAW4R",
    );

    //Flipkart/Amazon
    $product_sitekey = "TeiK01punJQ7RxINkeNcSK13i09m57p9heXEAVoP";
    $product_secret_key = "YQZSICKZODOIN0ZRT1ZBZAZIV3B7IVS8";
} elseif ($environment == 'stage') {
    $base_url = "https://www.stage.kissht.com/";
    $ncash_url = "http://192.168.1.111/ncash/";
    $merchant_id = "35861";

     //Instant cash
    $instant_sitekey = "ZTd6OViAVLhbiXWxa0fNOYtDYIHOHHlVL8Ix60Ri";
    $instant_secret_key = "QW5FI3HRJO1EN25MZ0LZ0GFJJVIHSDMA"; 

    $instant_sitekey_lowcash = "OVlImWb94MpbjLN3ErEJMnvKfgIVcJaZFgi4apFN";
    $instant_secret_key_lowcash = "6QI3FPX5HGUMIHYYXD7PH22H64W4R5HW";

    $instant_cash_data["instant_cash"] = array(
            "site_key" => "ZTd6OViAVLhbiXWxa0fNOYtDYIHOHHlVL8Ix60Ri",
            "secret_key" => "QW5FI3HRJO1EN25MZ0LZ0GFJJVIHSDMA",
    );

    $instant_cash_data["instant_cash_low"] = array(
            "site_key" => "OVlImWb94MpbjLN3ErEJMnvKfgIVcJaZFgi4apFN",
            "secret_key" => "6QI3FPX5HGUMIHYYXD7PH22H64W4R5HW",
    );

    //Flipkart/Amazon
    $product_sitekey = "JQwt6KINx261UKLMbMf917V84FoOQoGIXupUONxt";
    $product_secret_key = "NM0A705DY3K1JJS6ONBSIF201FTS53RX";
} elseif ($environment == 'test') {
    $base_url = "https://www.test.fastbanking.com/";
    $ncash_url = "http://192.168.1.111/ncash/";
    $merchant_id = "3030"; 

     //Instant cash
    $instant_sitekey = "G3p6OVdSqA2akbnT8f2R5270k5km1Jc0HBPDoa8B";
    $instant_secret_key = "V74BN5SWOTO60MH3FW3YZESMKEDQ32Z8";

    $instant_sitekey_lowcash = "7fqMcIIn5TXiHPIttXXij1yr89kTjKCLhSdHQw3a";
    $instant_secret_key_lowcash = "VXSCJAG5HLAW5CJDCBDSJ1FJUCURAW4R";

    $instant_cash_data["instant_cash"] = array(
            "site_key" => "G3p6OVdSqA2akbnT8f2R5270k5km1Jc0HBPDoa8B",
            "secret_key" => "V74BN5SWOTO60MH3FW3YZESMKEDQ32Z8",
    );

    $instant_cash_data["instant_cash_low"] = array(
            "site_key" => "7fqMcIIn5TXiHPIttXXij1yr89kTjKCLhSdHQw3a",
            "secret_key" => "VXSCJAG5HLAW5CJDCBDSJ1FJUCURAW4R",
    );

    //Flipkart/Amazon
    $product_sitekey = "TeiK01punJQ7RxINkeNcSK13i09m57p9heXEAVoP";
    $product_secret_key = "YQZSICKZODOIN0ZRT1ZBZAZIV3B7IVS8";
} elseif ($environment == 'prod') {
    //$base_url = "https://www.fastbanking.com/";   
    $base_url = "https://kissht.com/"; 
    $ncash_url = "https://quickrupiya.com/";
    $merchant_id = "38558";

     //Instant cash
    $instant_sitekey = "iw6iSCqNIIthrXRPvfA0HyMOoQ5WIcj5dXmQJE6f";
    $instant_secret_key = "TKFCKZ1TRJE1QMH488S211UGVB6EKKEP";

    $instant_sitekey_lowcash = "yix8ihvrFojGb82U0Y4WFx85avJXE5dNf7NmfH7H";
    $instant_secret_key_lowcash = "UQ5SV70A3DZLFBUQZDDPZC155OAPJ71U";

    $instant_cash_data["instant_cash"] = array(
            "site_key" => "iw6iSCqNIIthrXRPvfA0HyMOoQ5WIcj5dXmQJE6f",
            "secret_key" => "TKFCKZ1TRJE1QMH488S211UGVB6EKKEP",
    );

    $instant_cash_data["instant_cash_low"] = array(
            "site_key" => "yix8ihvrFojGb82U0Y4WFx85avJXE5dNf7NmfH7H",
            "secret_key" => "UQ5SV70A3DZLFBUQZDDPZC155OAPJ71U",
    );

    //Flipkart/Amazon
    $product_sitekey = "wr8QaYOEgYHIfMQLXFwrxy0Js92vHLBPp4qBvN3U";
    $product_secret_key = "8G8QHRPOAN7MKIQ52VGKTOXH8OX1OD1U";
}  
 
/* AMAZON S3 CONSTANT */
if ($environment == 'prod') { 
    $bucket = 'fastbankingprodbucket';
} else {
    $bucket = 'fastbankingdemobucket';
}

return[
//FRANCHISEE MERCHANT DETAILS
    "MERCHANT_ID" => $merchant_id,
    "INSTANT_CASH_KEYS" => $instant_cash_data,
    "SITEKEY" => $instant_sitekey,    
    "SECRET_KEY" => $instant_secret_key,
    "SITEKEY_LOWCASH" => $instant_sitekey_lowcash,    
    "SECRET_KEY_LOWCASH" => $instant_secret_key_lowcash,
    "PRODUCT_SITEKEY" => $product_sitekey,
    "PRODUCT_SECRET_KEY" => $product_secret_key,  
    "tbl_fastbanking_franchise" => "tbl_fastbanking_franchise",
    "tbl_fastbanking_franchise_users" => "tbl_fastbanking_franchise_users",
    //This constant of API
    "BASE_URL" => $base_url,
    "NCASH_URL" => $ncash_url,
    "API_LINK" => $base_url . "api/v1/",
    "PAYMENT_API_LINK" => "https://api.razorpay.com/",
    "RAZOR_KEY" => "rzp_test_a8i85PIwYFA2rr",
    "RAZOR_SECRET" => "5lxZSpm4wxmKs5xTr6scBVe0",
    /* AMAZON S3 CONSTANT */
    "AMAZON_HOST" => 'https://s3-ap-southeast-1.amazonaws.com/',
    "BUCKET" => $bucket,
    "TOKEN" => "SOZjvzjI6tlUPYSkPfCGC0cHiqzFg0TDMXdzcxTj",  
];
