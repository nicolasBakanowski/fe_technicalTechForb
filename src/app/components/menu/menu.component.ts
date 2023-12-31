import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuService } from '../../services/menu/menu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [CommonModule],
})
export class MenuComponent implements OnInit {
  menuOptions: any[] = [];
  @Output() optionClicked = new EventEmitter<any>();

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.loadMenuOptions();
  }

  loadMenuOptions() {
    this.menuService.getMenuOptions().subscribe({
      next: (response) => {
        this.menuOptions = response;
      },
      error: (error) => {
        console.error('Error en la solicitud:', error);
      },
    });
  }
  onOptionClicked(optionId: any) {
    this.optionClicked.emit(optionId);
  }
}
