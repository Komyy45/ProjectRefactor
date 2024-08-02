import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    debugger;
    if (username === 'user' && password === 'password') {
      this.loggedIn = true;

      this.router.navigate(['/']);
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
