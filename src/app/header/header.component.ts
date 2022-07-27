import { NgModule, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  componentName:string = "Header Component";
  myvalue:string ="Hello";

  showData($event:any){
    console.log("Button is clicked");
  }

  constructor() { }

  ngOnInit(): void {
     
  }

}
