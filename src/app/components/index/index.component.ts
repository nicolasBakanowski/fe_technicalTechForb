import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [LoginComponent, RegisterComponent, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  formView: boolean = true;
  InLogin() {
    this.formView = false;
  }

  InRegister() {
    this.formView = true;
  }
}
