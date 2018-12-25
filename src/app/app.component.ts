import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  logIn: boolean;

  constructor(router:Router) {
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        if(localStorage.getItem('logIn')=="true") { this.logIn=true }
        else {this.logIn = false } 
      }
    })
  }

  
  ngOnInit(){
    if(localStorage.getItem('logIn')=="true") { this.logIn=true }
    else {this.logIn = false } 
  }

}
