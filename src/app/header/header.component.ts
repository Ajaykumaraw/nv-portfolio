import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggle_menu: boolean = true;
  @ViewChild('links') navlinks!:ElementRef;
  @ViewChild('clicon') mnClose!:ElementRef;

  constructor(private router:Router) { }

  ngOnInit(): void {
    // this.navlinks.classList.value = "nav-links-new";
  }


  tgmn(){
    this.navlinks.nativeElement.classList = 'nav-links-new'; 
    this.mnClose.nativeElement.classList = 'clmn';
    // if( this.toggle_menu){
    //   this.toggle_menu = false;
    // }else  this.toggle_menu = true;
  
  }
  clmn(){
    this.navlinks.nativeElement.classList = 'nav-links-new-cl'; 
    this.mnClose.nativeElement.classList = 'clmn-cl';
  }

  scroll(element:any) {
    window.scrollTo(element.yPosition);
}
}
