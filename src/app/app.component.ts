import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'portfolio';
  toggle_menu: boolean = true;
  @ViewChild('links') navlinks!:ElementRef;
  @ViewChild('clicon') mnClose!:ElementRef;
  @ViewChild('about') aboutSection!:ElementRef;
  @ViewChild('exp') expSection!:ElementRef;
  @ViewChild('Work') projectSection!:ElementRef;
  @ViewChild('getInTouch') getInTouchSection!:ElementRef;

  constructor(private router:Router) { }

  // ngOnInit(): void {
  //   // this.navlinks.classList.value = "nav-links-new";
  // }


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

  // scroll(el: HTMLElement) {
  //   el.scrollIntoView({behavior: 'smooth'});
  // }
  scrolldiv(){
    this.aboutSection.nativeElement.scrollIntoView({behavior: 'smooth'});
  }
  scrollexp(){
    this.expSection.nativeElement.scrollIntoView({behavior: 'smooth'});
  }
  scrollproj(){
    this.projectSection.nativeElement.scrollIntoView({behavior: 'smooth'});
  }
  scrollgetInTouchSection(){
    this.getInTouchSection.nativeElement.scrollIntoView({behavior: 'smooth'});
  }
}
