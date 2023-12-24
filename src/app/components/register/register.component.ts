import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthCreateUser } from '../../services/auth/auth.interface';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registrationData: AuthCreateUser = {
    name: '',
    lastName: '',
    numberDocument: '',
    password: '',
    profileImage: 'https://example.com/profile.jpg',
    typeDocumentId: 1,
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.registrationData).subscribe({
      next: (response) => {
        window.location.reload();
      },
      error: (error) => {
        console.error('Error en la solicitud de registro:', error);
      },
    });
  }
}
