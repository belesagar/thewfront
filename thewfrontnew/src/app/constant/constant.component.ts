import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-constant',
  templateUrl: './constant.component.html',
  styleUrls: ['./constant.component.css']
})
export class Constant implements OnInit {

  public static get HOME_URL(): string { return "http://127.0.0.1:8000/thew3/"; };
  public static get API_URL(): string { return "http://127.0.0.1:8000/index.php/api/"; };
  public static get razor_key(): string { return "rzp_test_a8i85PIwYFA2rr"; };
  public static get razor_secret(): string { return "5lxZSpm4wxmKs5xTr6scBVe0"; };

  constructor() { 
    
  }

  ngOnInit() {  
  }

}
