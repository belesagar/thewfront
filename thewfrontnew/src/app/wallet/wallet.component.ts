import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Constant } from '../constant/constant.component';
import { Router } from "@angular/router";
import { CommonService } from "../common.service";
import { FormGroup, FormBuilder, Validators,FormControl,FormArray } from '@angular/forms';
import { TosterService } from '../toster-service.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  walletData = {};
  walletHistoryData = {};
  historyData: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
    let apiUrl = Constant.API_URL+`getWalletData`;
    return this.http.get(apiUrl).subscribe(response => {
      console.log(response)
      if(response['ERROR_CODE'] == 0)
      {
          this.walletData = response['DATA'];
          // let data = response['DATA']['order_data'];
          // let service_data = response['DATA']['service_data'];

         
        
      }
     
    });

  }

  getWalletHistory()
  {
    let apiUrl = Constant.API_URL+`getWalletHistory`;
    return this.http.get(apiUrl).subscribe(response => {
      console.log(response)
      if(response['ERROR_CODE'] == 0)
      {
          this.historyData = true;
          this.walletHistoryData = response['DATA'];
          // let data = response['DATA']['order_data'];
          // let service_data = response['DATA']['service_data'];

         
        
      }
     
    });
  }

}
