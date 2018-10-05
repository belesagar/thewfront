import { Component, OnInit,ViewEncapsulation,Renderer2 } from '@angular/core';
import { CommonService } from "../../common.service";

@Component({
  selector: 'app-middel',
  templateUrl: './middel.component.html',
  styleUrls: ['./middel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MiddelComponent implements OnInit { 

  constructor(private commonservice: CommonService,private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.addClass(document.body, 'theme-red');
    this.commonservice.checkLogin();
  }

}
