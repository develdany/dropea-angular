import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private validUser = {
    email: 'user@demo.com',
    password: '123456'
  };

  login(email: string, password: string): boolean {
    if (email === this.validUser.email && password === this.validUser.password) {
      localStorage.setItem('user', JSON.stringify(this.validUser));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }
}
