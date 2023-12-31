import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule],
  standalone: true,
})
export class LoginComponent {
  loginData = {
    numberDocument: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  onSubmit() {
    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        const jsonResponse = JSON.parse(JSON.stringify(response));
        this.tokenService.setToken(jsonResponse.token);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Error en la solicitud:', error);
      },
    });
  }
}
