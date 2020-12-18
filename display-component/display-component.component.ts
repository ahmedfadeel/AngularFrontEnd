import { Component, OnInit } from '@angular/core';
import {ApiResult}  from '../api-result'; 
import {NumVerifyService}             from '../num-verify.service'; 
@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.css']
})
export class DisplayComponentComponent implements OnInit {
  apiresultList: ApiResult[]; 
  constructor( private _service :NumVerifyService) { }

  ngOnInit(): void {
      this.displayList();
  }


  displayList(){
   this._service. getAll().subscribe(data =>{
     this.apiresultList=data;
   });

  }
}
