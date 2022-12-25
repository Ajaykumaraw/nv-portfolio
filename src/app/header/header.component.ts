import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggle_menu: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }


  tgmn(){
    return this.toggle_menu = !this.toggle_menu;
  }

}
