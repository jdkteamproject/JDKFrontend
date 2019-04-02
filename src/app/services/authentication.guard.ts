import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private _auth: AuthenticationService,
    private _router: Router) {}
  
  canActivate(): boolean {
    if (this._auth.loggedIn()){
      console.log('true');
      return true
    } else {
      console.log('false');
      this._router.navigate([''])
      return false;
    }
  }
}
