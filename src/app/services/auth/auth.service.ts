import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConfigurationService } from '../apiConfigurations/apiConfiguration.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private apiConfig: ApiConfigurationService
  ) {}

  login(credentials: { numberDocument: string; password: string }) {
    const endpoint = 'auth/login';
    const apiUrl = this.apiConfig.getApiUrl(endpoint);
    return this.http.post(apiUrl, credentials);
  }
}
