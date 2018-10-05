import { Component, OnInit,Renderer2 } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { TosterService } from './toster-service.service';
import { Constant } from './constant/constant.component';
import { Router,Event, NavigationStart, NavigationEnd, NavigationError } from "@angular/router";
import { LocalStorageServiceService } from './local-storage-service.service';
import { CommonService } from "./common.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Thew';
  showlogin: boolean = true;

  successMessage: string = "";
  errorMessage: string = "";
  token_id: string = "";
  menuState: string = "";

  message:string;

  postData = {};

  constructor(private http: HttpClient,private toasterService:TosterService,private router: Router,private localStorageService:LocalStorageServiceService,private data: CommonService,private renderer: Renderer2){
    // this.data.currentMessage.subscribe(message => this.message = message)
    router.events.subscribe( (event: Event) => {

      if (event instanceof NavigationStart) {
          // Show loading indicator
          // this.renderer.removeClass(document.body, 'overlay-open'); 
          console.log("call event");
      }

      if (event instanceof NavigationEnd) {
          // Hide loading indicator
      }

      if (event instanceof NavigationError) {
          // Hide loading indicator
          // Present error to user
          console.log(event.error);
      }
});
  }

  ngOnInit()
  {
        
        // console.log("Check Login call");
        // this.token_id = this.localStorageService.GetValueFromLocalStorage();

        // this.postData = {
        //   token_id: JSON.parse(this.token_id)
        // };

        // let apiUrl = Constant.API_URL+`checklogin`;
        // return this.http.post(apiUrl,this.postData).subscribe(response => {
        //   // console.log(response)
        //   if(response['ERROR_CODE'] == 0)
        //   {
            
        //     // this.router.navigate(['/dashboard']);
        //   }else{
        //     this.router.navigate(['/login']);
        //   }
         
        // });
  }

  Success()
  {
    this.toasterService.Success("Title","New Toster");
  }

  Error()
  {
    this.toasterService.Error("Title","New Toster");
  }

  Warning()
  {
    this.toasterService.Warning("Title","New Toster");
  }

  Info()
  {
    this.toasterService.Info("New Toster");
  }
}
