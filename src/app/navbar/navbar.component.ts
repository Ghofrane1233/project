import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  navbarfixed:boolean=false;
  @HostListener('window:scroll',['$event']) onscroll(){
    if (window.scrollY > 50)
    {
      this.navbarfixed=true;
    }
    else{
      this.navbarfixed=false;
    }
  }
  
}
