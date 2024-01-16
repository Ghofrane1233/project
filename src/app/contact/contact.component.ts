import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  navbarfixed1:boolean=false;
  @HostListener('window:scroll',['$event']) onscroll1(){
    if (window.scrollY > 50)
    {
      this.navbarfixed1=true;
    }
    else{
      this.navbarfixed1=false;
    }
  }

}
