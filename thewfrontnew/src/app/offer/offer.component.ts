import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Constant } from '../constant/constant.component';
import { Router } from "@angular/router";
import { CommonService } from "../common.service";
import { FormGroup, FormBuilder, Validators,FormControl,FormArray } from '@angular/forms';
import { TosterService } from '../toster-service.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  OfferData: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    let apiUrl = Constant.API_URL+`getOfferData`;
    return this.http.get(apiUrl).subscribe(response => {
      // console.log(response)
      if(response['ERROR_CODE'] == 0)
      {
          this.OfferData = response['DATA']['offer_data'];
          // let data = response['DATA']['order_data'];
          // let service_data = response['DATA']['service_data'];

         
        
      }
     
    });

  }

}
