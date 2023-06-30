import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-eye-button',
  templateUrl: './eye-button.component.html',
  styleUrls: ['./eye-button.component.scss']
})
export class EyeButtonComponent {
  constructor(private sidebarService:SidebarService) {}
  

  openSidebar() {
    this.sidebarService.isSidebarOpen.next(true)
  }
}
