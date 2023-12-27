import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  selectedOptionId: any;

  onOptionClicked(optionId: any) {
    this.selectedOptionId = optionId;
  }
}
