import { Component, Input, OnInit } from '@angular/core';
import { IBoard } from 'src/app/models/IBoard';
import { BoardService } from 'src/app/services/board.service';
import { ModalService } from 'src/app/services/modal.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isSidebarOpen!:boolean
  @Input() currentBoardName!:string
  @Input() boardList!:IBoard[]
  
  constructor(private sidebarService:SidebarService, private boardService: BoardService, private modalService:ModalService) {}
  ngOnInit(): void {
    
    this.sidebarService.getSidebarOpen().subscribe(data=> {
      this.isSidebarOpen = data
    })
   
  }

  closeSidebar() {
    this.sidebarService.isSidebarOpen.next(false)
  }

  changeCurrentBoard(boardName:string) {
    this.boardService.currentBoardName.next(boardName)
  }
  openModal() {
    this.modalService.openModal('createBoardModal')
    this.modalService.closeModal('sidebarModal')
  }
}
