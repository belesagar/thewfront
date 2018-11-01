import { Component, OnInit,Input } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Constant } from '../constant/constant.component';
import { Router, ActivatedRoute } from "@angular/router";
import { CommonService } from '../common.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-servicecategory',
  templateUrl: './servicecategory.component.html',
  styleUrls: ['./servicecategory.component.css'],
  
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
  content = "Content";

  category_name: string;

  constructor(private http: HttpClient,private router: Router,private route: ActivatedRoute,private commonservice:CommonService,private modalService: NgbModal) { }

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

  open() {
    // const modalRef = this.modalService.open(NgbdModalContent);
    // modalRef.componentInstance.name = 'World';
    this.display='block'; 
  }

  onCloseHandled(){


    this.display='none'; 


 }

  getCategoryData(services_category_id,category_name)
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
            this.category_name = category_name;
            this.display='block'; 
            this.categorytypedata = response['DATA'];
            
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
