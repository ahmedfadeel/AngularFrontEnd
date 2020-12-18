import { Component, OnInit } from '@angular/core';
import {User}  from '../user';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
import {AuthenticationRequest} from '../authentication-request'
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  user :User;
  authRquest:AuthenticationRequest;
  constructor(private loginService :LoginService,
  private router:Router) { 
     this.user=new User();
     this.authRquest=new  AuthenticationRequest(); 
  }
     
  ngOnInit(): void {
 
  }
 public logIn(){
    
    this.loginService.login(this.authRquest).subscribe(data =>{
         this.user=data;
    });
 }
 
 signUp(){
      this.router.navigate(['sign-up']); 
  }

}
