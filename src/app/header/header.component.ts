import { RouterServiceService } from './../router-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  value:string= "List View";
  constructor(private myroute : RouterServiceService) { }

  ngOnInit(): void {
  }
  login(){
  this.myroute.routeToListView();
}
gridview(){
  this.myroute.routeToDashboard();
}
}
