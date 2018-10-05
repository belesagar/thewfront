import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Constant } from '../../constant/constant.component';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { CommonService } from '../../common.service';
import { TosterService } from '../../toster-service.service';

@Component({
  selector: 'app-paymentresult',
  templateUrl: './paymentresult.component.html',
  styleUrls: ['./paymentresult.component.css']
})
export class PaymentresultComponent implements OnInit {

  postData = {};
  transaction_id: string;
  transactionData = {};
  transactionStatus: boolean = true;
  offerShow: boolean = false;
  walletShow: boolean = false;
  showData: Boolean = false;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private commonservice: CommonService, private toasterService: TosterService) {
    this.commonservice.checkLogin();
   
    this.getTransactionData();

  }
  
  ngOnInit() {
    
  }
  

  getTransactionData() {
    
    this.commonservice.showloader();

    this.route.params.subscribe(params => { this.transaction_id = params['id']; });
    this.postData = {
      transaction_id: this.transaction_id
    };

    let apiUrl = Constant.API_URL + `getTransactionData`;
    this.http.post(apiUrl, this.postData).subscribe(response => {
   
      if (response['ERROR_CODE'] == 0) {
        this.showData = true;
        this.transactionData = response['DATA'][0];
     
        if (this.transactionData['offer_id'] != "" && this.transactionData['offer_id'] != null) {
          this.offerShow = true;
        }

        if (this.transactionData['wallet_amount'] != "" && this.transactionData['wallet_amount'] != null) {
          this.walletShow = true;
        }

        this.toasterService.Success("Success", "Payment is Successfully Done.");
      } else {
        this.transactionStatus = false;
      }

      this.commonservice.hideloader();
    });

  }

}
