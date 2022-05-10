import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  isUserLoggedIn(){
   //login information to fetch from server  return true - user has access else deny
    return false;
  }

  isAdminRole(){
    //Role information to fetch from server  return true - user has admin role  else deny
     return false;
   }
}
