import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConfigurationService } from '../apiConfigurations/apiConfiguration.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenSubject = new BehaviorSubject<string | null>(null);
  token$ = this.tokenSubject.asObservable();

  constructor(
    private http: HttpClient,
    private apiConfig: ApiConfigurationService
  ) {}

  login(credentials: { numberDocument: string; password: string }) {
    const endpoint = 'auth/login';
    const apiUrl = this.apiConfig.getApiUrl(endpoint);
    return this.http.post(apiUrl, credentials);
  }

  setToken(token: string | null) {
    this.tokenSubject.next(token);
    token && localStorage.setItem('token', token);
  }
  getToken(): string | null {
    return this.tokenSubject.value;
  }
  addTokenToHeaders(headers: HttpHeaders): HttpHeaders {
    const token = this.getToken();

    if (token) {
      return headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
}
