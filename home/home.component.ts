import { Component, OnInit } from '@angular/core';
import {Router}  from '@angular/router';
import {NumVerifyService}             from '../num-verify.service'; 
import {User} from '../user';
import {ApiResult}   from '../api-result';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})  
export class HomeComponent implements OnInit {
    input:string;
    apiResult:ApiResult=new ApiResult();

  constructor(private router:Router,
  private _service :NumVerifyService) {   
  }

  ngOnInit(): void { 
     
  }
  
  submit(){
   this._service.validate(this.input).subscribe(data => {
        this.apiResult=data;    
        this.save_Request()      
   },
   error=>console.log(error));

    } 
   save_Request(){
    
      this._service.saveRequest(this.apiResult).subscribe(data=>{
         console.log(data) 
      },
       error=>console.log(error));
   }
  
   
   
  
    
}
