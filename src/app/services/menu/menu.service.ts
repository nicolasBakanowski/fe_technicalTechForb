import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConfigurationService } from '../apiConfigurations/apiConfiguration.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(
    private http: HttpClient,
    private apiConfig: ApiConfigurationService,
    private authService: AuthService
  ) {}

  getMenuOptions() {
    const endpoint = 'menu/getAll';
    const apiUrl = this.apiConfig.getApiUrl(endpoint);
    const headers = this.authService.addTokenToHeaders(new HttpHeaders());
    return this.http.get<any[]>(apiUrl, { headers });
  }
}
