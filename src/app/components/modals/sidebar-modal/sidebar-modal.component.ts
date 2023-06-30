import { Component, Input } from '@angular/core';
import { IBoard } from 'src/app/models/IBoard';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-sidebar-modal',
  templateUrl: './sidebar-modal.component.html',
  styleUrls: ['./sidebar-modal.component.scss']
})
export class SidebarModalComponent {
  @Input() currentBoardName!:string
  @Input() boardList!:IBoard[]
  constructor(private modalService:ModalService){}
  closeModal() {
    this.modalService.closeModal('sidebarModal')
  }
}
