import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  isTokenPresent(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
  deleteTokenFromStorage(): void {
    localStorage.removeItem('token');
  }
}
