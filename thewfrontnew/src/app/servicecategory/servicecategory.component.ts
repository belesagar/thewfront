import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Constant } from '../constant/constant.component';
import { Router, ActivatedRoute } from "@angular/router";
import { CommonService } from '../common.service';

@Component({
  selector: 'app-servicecategory',
  templateUrl: './servicecategory.component.html',
  styleUrls: ['./servicecategory.component.css']
})
export class ServicecategoryComponent implements OnInit {

  successMessage: string = "";
  errorMessage: string = "";
  postData = {};
  
  responceData: string = "";
  categorytypedata: string = "";
  id:string;
  showModal:boolean = true;
  display = "none";
  fade = "";


  constructor(private http: HttpClient,private router: Router,private route: ActivatedRoute,private commonservice:CommonService) { }

  ngOnInit() { 

    this.commonservice.showloader();

    this.route.params.subscribe(params => { this.id = params['id']; });
    this.postData = {
      service_id: this.id
    };
    
    let apiUrl = Constant.API_URL+`getServiceCategories`;
      return this.http.post(apiUrl,this.postData).subscribe(response => {
        console.log(response);
        if(response['ERROR_CODE'] == 0)
        {
          if(response['DATA'].length != 0)
          {
            this.responceData = response['DATA'];
            

          }else{
             this.router.navigate(['/services']);
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

  getCategoryData(services_category_id)
  {
    this.commonservice.showloader();

    this.postData = {
      services_category_id: services_category_id
    };
    
    let apiUrl = Constant.API_URL+`getCategoryTypeData`;
      return this.http.post(apiUrl,this.postData).subscribe(response => {
        console.log(response);
        if(response['ERROR_CODE'] == 0)
        {
          if(response['DATA'].length != 0)
          {
            this.categorytypedata = response['DATA'];
            this.display='block'; 
            this.fade='in'; 
            this.showModal=false; 
            console.log(this.display);
          }else{
            //  this.router.navigate(['/services']);
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

}
