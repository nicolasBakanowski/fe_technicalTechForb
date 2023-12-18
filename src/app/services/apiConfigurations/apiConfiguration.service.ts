import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiConfigurationService {
  private baseUrl = 'http://localhost:8080/api/';

  getApiUrl(endpoint: string): string {
    return this.baseUrl + endpoint;
  }
}
