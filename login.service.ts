import { Injectable } from '@angular/core';
import {BehaviorSubject,Observable}   from 'rxjs';
import {Router} from '@angular/router';
import {HttpClient}   from '@angular/common/http';
import {User}         from './user';
import {AuthenticationRequest} from './authentication-request';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
 private userSubject:BehaviorSubject<User>;
 public user: Observable<User>;
 private baseURL = "http://localhost:8082/users";
 

  constructor(private http:HttpClient,
  private router:Router) { 
     this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
  }

   home(): Observable<Object>{
   return  this.http.get<Object>(`${this.baseURL}`);

  }
   get userValue(): User {
        return this.userSubject.value;
    }

     login(authRequest:AuthenticationRequest ) :Observable<User> {
        return this.http.post<User>(`${this.baseURL}/authenticate`, authRequest)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

     logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }

     register(user: User) : Observable<Object>{
        return this.http.post(`${this.baseURL}/register`, user);
    }

     getAll() :Observable<User[]>{
        return this.http.get<User[]>(`${this.baseURL}/getAll`);
    }

     getById(id: string)  :Observable<Object>{
        return this.http.get<User>(`${this.baseURL}/${id}`);
    }

     
}
