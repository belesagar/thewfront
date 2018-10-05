import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Constant } from '../../constant/constant.component';
import { Router, ActivatedRoute } from "@angular/router";
import { CommonService } from '../../common.service';
// const url = 'assets/js/pages/ui/range-sliders.js';
const url2 = 'assets/plugins/ion-rangeslider/js/ion.rangeSlider.js';
const url3 = 'assets/js/pages/ui/range-sliders.js';
const url4 = 'assets/plugins/jquery/jquery.min.js';
const pay_url = 'https://checkout.razorpay.com/v1/checkout.js';
import { TosterService } from '../../toster-service.service';
declare var Razorpay: any;

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css',
  //'../../../assets/plugins/ion-rangeslider/css/ion.rangeSlider.css',
  //'../../../assets/plugins/ion-rangeslider/css/ion.rangeSlider.skinFlat.css'
]
})
export class OrderdetailsComponent implements OnInit {

  successMessage: string = "";
  errorMessage: string = "";

  postData = {};
  status = [
    "Ordered", "Picked up",
    "Processing", "Ready",
    "Delivered","Cancelled"
  ];
  orderdetails: string = "";
  order_id:string;

  razor_key:string = "";
  
  transactionData = {};

  paymentShow: boolean = false;
  cancleOrderShow: boolean = false;
  
  constructor(private http: HttpClient,private router: Router,private route: ActivatedRoute,private commonservice:CommonService,private toasterService:TosterService) { 
    
    //This code for check login     
    this.commonservice.checkLogin(); 
    // this.commonservice.loadScript(url4);
    // this.commonservice.loadScript(url2);

    // this.commonservice.loadScript(url3);


  }

  ngOnInit() {
    
    //This service for loading script
    // this.commonservice.loadScript(url);
    this.commonservice.loadScript(pay_url);
    this.getOrderData();

  }

  getOrderData()
  {
    this.commonservice.showloader();

    this.route.params.subscribe(params => { this.order_id = params['id']; });
    this.postData = {
      order_id: this.order_id
    };
    
    let apiUrl = Constant.API_URL+`getOrderDetails`;
      return this.http.post(apiUrl,this.postData).subscribe(response => {
        console.log(response);
        if(response['ERROR_CODE'] == 0)
        {
          if(response['DATA'].length != 0)
          {
            this.orderdetails = response['DATA'][0];

            if(this.orderdetails['total_amount'] > 0)
            {
                this.paymentShow = true;

                if(this.orderdetails['status'] == "Ordered")
                {
                    this.cancleOrderShow = true;
                }

                this.razor_key = Constant.razor_key;

            }

            // console.log(this.orderdetails)
          }else{
             this.router.navigate(['/orderlist']);
          }

          // this.errorMessage = "";
          // this.successMessage = "Order is successfully placed";
          //this.router.navigate(['/verifyotp']);
        }else{
          this.errorMessage = response['ERROR_DESCRIPTION'];
          this.successMessage = "";
        }
        
        this.commonservice.hideloader();
      });

  }

  cancleOrder()
  {
      this.commonservice.showloader();
      this.postData = {
        order_id: this.order_id
      };

      let apiUrl = Constant.API_URL+`cancleOrder`;
      return this.http.post(apiUrl,this.postData).subscribe(response => {
        console.log(response);
        if(response['ERROR_CODE'] == 0)
        {
          this.toasterService.Error("","Order Cancled successfully..");
          window.location.reload();
          //this.getOrderData();
        }else{
          this.errorMessage = response['ERROR_DESCRIPTION'];
          this.successMessage = "";
        }
        
        this.commonservice.hideloader();
      });

  }

  proceed_to_pay()
  {
    
    this.commonservice.showloader();
    this.postData = {
      order_id: this.order_id
    };

    let apiUrl = Constant.API_URL+`initiate`;
    return this.http.post(apiUrl,this.postData).subscribe(response => {
      console.log(response);
      if(response['ERROR_CODE'] == 0)
      {
        this.transactionData = response['DATA'];
        this.paymentStart();
      }else{
        this.toasterService.Error("Error","Something is wrong, Please try again.");

        // this.errorMessage = response['ERROR_DESCRIPTION'];
        // this.successMessage = "";
      }
      
      this.commonservice.hideloader();
    });
    
  }

  paymentStart()
  {

      var options = {
          "key": "rzp_test_a8i85PIwYFA2rr",
          "amount": this.orderdetails['total_amount']*100, // 2000 paise = INR 20
          "name": "Merchant Name",
          "description": "Purchase Description", 
          "image": "/your_logo.png",
          "handler": function (response){
            // alert(response.razorpay_payment_id);
              // console.log(this.transaction_id);
              // this.transaction_id = response.razorpay_payment_id;
              // this.storePaymentData(); 
              
          },
          "prefill": {
              "name": "Harshil Mathur",
              "email": "harshil@razorpay.com"
          },
          "notes": {
              "address": "Hello World",
              "id": this.transactionData['transaction_id'],
              "order_id": this.order_id,
          },
          "theme": {
              "color": "#384ad7"//"#F37254"
          }
      };

      options.handler = (response)=>{
        this.storePaymentData(response); 
      }

      var rzp1 = new Razorpay(options);
      rzp1.open();
  }


  storePaymentData(transaction_id)
  { 
    this.commonservice.showloader();
    this.postData = {
      transaction_id: transaction_id.razorpay_payment_id
    };

    let apiUrl = Constant.API_URL+`storeTransData`;
      return this.http.post(apiUrl,this.postData).subscribe(response => {
        console.log(response);
        if(response['ERROR_CODE'] == 0)
        {
          // if(response['DATA'].length != 0)
          // {
            
          // }else{
          //    this.router.navigate(['/orderlist']);
          // }

          // this.errorMessage = "";
          // this.successMessage = "Order is successfully placed";
          //this.router.navigate(['/verifyotp']);

          this.toasterService.Success("Success","Payment is Successfully Done.");
        }else{
          this.toasterService.Error("Error",response['ERROR_DESCRIPTION']);
        }
        
        this.commonservice.hideloader();
      });

      
  }

}
