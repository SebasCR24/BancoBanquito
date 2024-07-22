import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly USERS_KEY = 'users';
  private readonly FIRST_LOGIN_KEY = 'firstLogin';

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(user));

      if (!user.firstLoginCompleted) {
        this.router.navigate(['/verify-password']);
      } else {
        this.router.navigate(['/dashboard']);
      }
      return true;
    }

    // Si no hay usuarios registrados, usamos las credenciales quemadas
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      const defaultUser = { username: 'admin', password: 'admin', firstLoginCompleted: false };
      localStorage.setItem('currentUser', JSON.stringify(defaultUser));
      localStorage.setItem(this.USERS_KEY, JSON.stringify([defaultUser]));
      this.router.navigate(['/verify-password']);
      return true;
    }

    return false;
  }

  registerAdmin(username: string, password: string): void {
    const users = this.getUsers();
    users.push({
      username: username,
      password: password,
      firstLoginCompleted: true // Se considera completado para evitar verify-password después del registro
    });
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('currentUser', JSON.stringify({ username, password, firstLoginCompleted: true }));
    this.router.navigate(['/dashboard']); // Redirigir al dashboard después del registro
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
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    return !currentUser.firstLoginCompleted;
  }

  completeFirstLogin(newPassword: string): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    const users = this.getUsers();

    const userIndex = users.findIndex(u => u.username === currentUser.username);
    if (userIndex !== -1) {
      users[userIndex].password = newPassword;
      users[userIndex].firstLoginCompleted = true;
      localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(users[userIndex]));
      localStorage.setItem(this.FIRST_LOGIN_KEY, 'false'); // Actualizamos el estado de primer inicio de sesión
    }
  }

  private getUsers(): any[] {
    return JSON.parse(localStorage.getItem(this.USERS_KEY) || '[]');
  }
}
