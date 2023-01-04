import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggle_menu: boolean = true;
  @ViewChild('nav-links') navlinks!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }


  tgmn(){
    if( this.toggle_menu){
      this.toggle_menu = false;
    }else  this.toggle_menu = true;
  
  }

}
