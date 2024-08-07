import { Component } from '@angular/core';
import { State } from '@ngxs/store';
import { Routes } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private location:Location){}
  ngOnInit() {
    let myLocation:string = this.location.path()
    let htmlElement;
    let inactiveElement;
    if(myLocation.includes("reactors")){
      if(htmlElement = document.getElementById("headerIcon")){
        htmlElement.className = "header-icon__wrapper__reactorIcon";
        htmlElement.setAttribute("href","#welcome");
      }
      if(htmlElement = document.getElementById("headerIconText")){
        htmlElement.innerHTML = "Return home";
      }
    }else{      // we are on main
      if(htmlElement = document.getElementById("headerIcon")){
        htmlElement.removeAttribute("href");
      }
      if(htmlElement = document.getElementById("headerIconLink")){
        htmlElement.removeAttribute("href");
        htmlElement.setAttribute("disabled", "disabled");
      }
    }
  }
  goHome(){
   // this.routes['/'];

  }
}
