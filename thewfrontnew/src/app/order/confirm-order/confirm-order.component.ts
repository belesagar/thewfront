import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Constant } from '../../constant/constant.component';
import { Router, ActivatedRoute } from "@angular/router";
import { CommonService } from '../../common.service';
import { TosterService } from '../../toster-service.service';
import { FormGroup, FormBuilder, Validators,FormControl,FormArray } from '@angular/forms';
const pay_url = 'https://checkout.razorpay.com/v1/checkout.js';
declare var Razorpay: any;

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {

  order_id:string;
  orderdetails: string = "";
  postData = {};
  transactionData = {};
  offerData = {};

  razor_key:string = "";

  apply_promocode_form: FormGroup;
  promocode_value: string = "";

  apply_promocode_button:boolean = true;
  apply_promocode_box:boolean = false;
  offer_box:boolean = false;

  remaning_amount:boolean = false;
  wallet_amount:boolean = false;

  total_bill: number = 0;
  offer_discount: number = 0;

  constructor(private http: HttpClient,private router: Router,private route: ActivatedRoute,private commonservice:CommonService,private toasterService:TosterService,private frmBuilder: FormBuilder) { 
      //This code for check login     
      this.commonservice.checkLogin();
      this.commonservice.loadScript(pay_url);
  }

  ngOnInit() {

    this.route.params.subscribe(params => { this.order_id = params['id']; });
    this.postData = {
      order_id: this.order_id
    };
    
    //This code for getting payment details of the order
    let apiUrl = Constant.API_URL+`getPaymenDetails`;
      return this.http.post(apiUrl,this.postData).subscribe(response => {
        console.log(response);
        if(response['ERROR_CODE'] == 0)
        {
          if(response['DATA'].length != 0)
          {
            this.orderdetails = response['DATA']['payment_details'][0];

            this.total_bill = this.orderdetails['total_amount'];
            // console.log(this.orderdetails)
          }else{
             this.toasterService.Error("Error",response['ERROR_DESCRIPTION']);
             this.router.navigate(['/orderlist']);
          }
        }else{
            this.toasterService.Error("Error",response['ERROR_DESCRIPTION']);
            this.router.navigate(['/orderlist']);
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

        //This code for set rezor pay ID
        this.razor_key = Constant.razor_key;

        this.paymentStart();
      }else{
        this.toasterService.Error("Error",response['ERROR_DESCRIPTION']);

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
          "amount": this.total_bill*100, // 2000 paise = INR 20
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
          // this.router.navigateByUrl(`/paymentresult/${response['DATA']['transaction_id']}`);
          this.router.navigate(['/paymentresult',response['DATA']['transaction_id']]);

          // this.toasterService.Success("Success","Payment is Successfully Done.");
        }else{
          this.toasterService.Error("Error",response['ERROR_DESCRIPTION']);
        }
        
        this.commonservice.hideloader();
      });

      
  }

  apply_promocode()
  {
    this.createForm();
    this.apply_promocode_button = false;
    this.apply_promocode_box = true;
  }

  get promocode() { return this.apply_promocode_form.get('promocode'); }

  public createForm()
  {
    this.apply_promocode_form = this.frmBuilder.group({
      promocode:['',Validators.compose([
          Validators.required,
          Validators.minLength(3),
          // Validators.pattern("[a-zA-Z ]*")
        ])]
      })
  }

  onApply()
  {
    console.log(this.apply_promocode_form.value);
    if(this.apply_promocode_form.valid)
    {
      this.commonservice.showloader();
  
      let apiUrl = Constant.API_URL+`checkPromocode`;
        return this.http.post(apiUrl,this.apply_promocode_form.value).subscribe(response => {
          console.log(response);
          if(response['ERROR_CODE'] == 0)
          {
            this.offerData = response['DATA'];

            if(this.offerData['offer_amount_type'] == "percent")
            {
              this.offer_discount = (this.orderdetails['amount_of_order']/100)*this.offerData['offer_amount'];
              this.total_bill = this.total_bill - this.offer_discount;
            }else{
              this.offer_discount = this.offerData['offer_amount'];
              this.total_bill = this.total_bill - this.offer_discount;
            }

            this.apply_promocode_box = false;
            this.offer_box = true;
            this.toasterService.Success("Success","Promocode applied successfully.");
          }else{
            this.toasterService.Error("Error",response['ERROR_DESCRIPTION']);
          }
          
          this.commonservice.hideloader();
        });
    }else{
        this.toasterService.Error("","Please enter valid promocode.");
    }
  }

  cancleOffer()
  {
    if(confirm("Are you sure you want to remove this promocode")) {
      let apiUrl = Constant.API_URL+`cancleOffer`;
      return this.http.get(apiUrl).subscribe(response => {
        console.log(response);
        if(response['ERROR_CODE'] == 0)
        {
          
          this.total_bill = this.total_bill + this.offerData['offer_amount'];
          this.apply_promocode_box = false;
          this.offer_box = false;
          this.apply_promocode_button = true;
          this.promocode_value = "";
          this.toasterService.Success("Success",response['ERROR_DESCRIPTION']);
        }else{
          this.toasterService.Error("Error",response['ERROR_DESCRIPTION']);
        }
        
        this.commonservice.hideloader();
      });
    }
  }

}
