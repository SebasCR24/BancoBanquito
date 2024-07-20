import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly FIRST_LOGIN_KEY = 'firstLogin';
  private readonly USERS_KEY = 'users';

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(user));

      if (!user.firstLoginCompleted) {
        localStorage.setItem(this.FIRST_LOGIN_KEY, 'true');
        this.router.navigate(['/verify-password']);
      } else {
        this.router.navigate(['/dashboard']);
      }
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  isFirstLogin(): boolean {
    return localStorage.getItem(this.FIRST_LOGIN_KEY) === 'true';
  }

  completeFirstLogin(newPassword: string): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    const users = this.getUsers();

    const userIndex = users.findIndex(u => u.username === currentUser.username);
    if (userIndex !== -1) {
      users[userIndex].password = newPassword;
      users[userIndex].firstLoginCompleted = true;
      localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
      localStorage.setItem(this.FIRST_LOGIN_KEY, 'false');
      localStorage.setItem('currentUser', JSON.stringify(users[userIndex]));
    }
  }

  private getUsers(): any[] {
    return JSON.parse(localStorage.getItem(this.USERS_KEY) || '[]');
  }
}
