
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  currentUser : string;
  hidenav : boolean = false;

  
  ngOnInit() {
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if(this.currentUser !='undefined') {
  	this.hidenav = true;
  }

  }

}
