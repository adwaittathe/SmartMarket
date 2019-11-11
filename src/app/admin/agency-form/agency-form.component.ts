import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.css']
})
export class AgencyFormComponent implements OnInit {

  agency : any ={};
  constructor() { }

  ngOnInit() {
  }

  saveAgency(val){

  }

  delete(){

  }

}
