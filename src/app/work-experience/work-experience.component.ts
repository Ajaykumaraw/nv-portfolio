import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  desig!:string;
  wkTm!:string;
  profile!:string;
  constructor() { }

  ngOnInit(): void {
    this.desig = 'Associate Engineer @ HCL Technologies';
    this.wkTm = 'Jan 2019 to May 2022';
    this.profile= 'Handling Server Installtion on customer location,starting from Requirement Gathering to Port Configuration on customer site.Cheking all the Router,interfaces,handoff, conector and Access type compatibility and following  the process  to deliver server.';
  }

  atHCL(){
    this.desig = 'Associate Engineer @ HCL Technologies';
    this.wkTm = 'Jan 2019 to May 2022';
    this.profile= 'Handling Server Installtion on customer location,starting from Requirement Gathering to Port Configuration on customer site.Cheking all the Router,interfaces,handoff, conector and Access type compatibility and following  the process  to deliver server.';

  }
  atmkr(){
    this.desig = 'Business Development Executive @ MKR Techsoft';
    this.wkTm = 'March 2019 to June 2019';
    this.profile= 'Bidding on the Jobs for different platforms discussing the budgets with client and finilising the deal for further work process. Completing and maintaing progress reports of project for clients';

  }

}
