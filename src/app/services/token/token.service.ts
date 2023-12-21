import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private tokenSubject = new BehaviorSubject<string | null>(null);
  token$ = this.tokenSubject.asObservable();

  constructor() {
    this.initializeToken();
  }

  private initializeToken(): void {
    const storedToken = localStorage.getItem('token');
    this.tokenSubject.next(storedToken);
  }
  isTokenPresent(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
  setToken(token: string | null) {
    this.tokenSubject.next(token);
    token && localStorage.setItem('token', token);
  }
  getToken(): string | null {
    console.log('este el token:', this.tokenSubject.value);
    return this.tokenSubject.value;
  }
  deleteTokenFromStorage(): void {
    localStorage.removeItem('token');
  }
}
