import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConfigurationService } from '../apiConfigurations/apiConfiguration.service';
import { Observable } from 'rxjs';
import { AuthCreateUser } from './auth.interface';
import { TokenService } from '../token/token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private apiConfig: ApiConfigurationService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  login(credentials: { numberDocument: string; password: string }) {
    const endpoint = 'auth/login';
    const apiUrl = this.apiConfig.getApiUrl(endpoint);
    return this.http.post(apiUrl, credentials);
  }
  register(userData: AuthCreateUser): Observable<any> {
    const endpoint = 'users/create';
    const apiUrl = this.apiConfig.getApiUrl(endpoint);
    return this.http.post(apiUrl, userData);
  }
  getAuthorizationHeader(): HttpHeaders {
    const token = this.tokenService.getToken();
    token
      ? new HttpHeaders().set('Authorization', `Bearer ${token}`)
      : this.router.navigate(['/login']);
    return new HttpHeaders();
    return new HttpHeaders();
  }
}
