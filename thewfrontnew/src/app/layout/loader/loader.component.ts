import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

    // template: string = '<div id="searching" class="loading loader" *ngIf="showloader"><a href="#" class="btn m-btn btn-outline-primary m-loader m-loader--primary m-loader--left">Button</a></div>';
    template: string = "<img src='assets/images/loading.gif'/>";

  constructor() { } 

  ngOnInit() {
  }

}
