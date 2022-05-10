import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthServiceService){

  }
  canActivate() {
    if(this.authService.isUserLoggedIn()){
      return true;
    }
    else{
      window.alert('Access Denied');
      return false;
    }
  }
  
}
