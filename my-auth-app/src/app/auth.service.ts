import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    // Add real authentication logic here
    if (username === 'root' && password === 'root') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
