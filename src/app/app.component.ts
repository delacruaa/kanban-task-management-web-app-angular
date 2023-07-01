import { Component } from '@angular/core';
import { IBoard } from './models/IBoard';
import { BoardService } from './services/board.service';
import { SidebarService } from './services/sidebar.service';
import { ModalService } from './services/modal.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kanban-task-management-web-app-angular';
  isSidebarOpen!:boolean
  loading=false
  error=false
  boardList:IBoard[] = [] 
  currentBoardName!:string
  viewTaskModal=false
  deleteTaskModal= false
  editTaskModal=false
  createBoardModal=false
  editBoardModal=false
  deleteBoardModal=false
  addColumnModal=false
  sidebarModal=false
  constructor(private sidebarService:SidebarService, private boardService: BoardService,private modalService: ModalService) {}
  ngOnInit(): void {
    this.loading=true
    this.sidebarService.getSidebarOpen().subscribe(data=> {
      this.isSidebarOpen = data
    })
    this.boardService.getBoardList().subscribe(boardList=> {
     
      this.boardList =boardList.slice(1)
      this.boardService.getCurrentBoardName().subscribe((currentBoardName)=> {
        if(currentBoardName) {
          this.currentBoardName = currentBoardName
        }else {
          this.currentBoardName = boardList.slice(1)[0].name
        }
        this.boardService.currentBoard.next(boardList.slice(1).filter(item=>item.name===this.currentBoardName)[0])
      })
      this.loading=false
    },(error)=> {
      this.error =true
      this.loading=false
    })
    this.boardService.getCurrentBoardName().subscribe(currentBoardName=> {
      this.currentBoardName = currentBoardName
      this.boardService.currentBoard.next(this.boardList.slice(1).filter(item=>item.name===currentBoardName)[0])
    })

    this.modalService.viewTaskModal.subscribe(data=> {
      this.viewTaskModal =data
    })
    this.modalService.deleteTaskModal.subscribe(data=> {
      this.deleteTaskModal =data
    })
    this.modalService.editTaskModal.subscribe(data=> {
      this.editTaskModal =data
    })
    this.modalService.createBoardModal.subscribe(data=> {
      this.createBoardModal =data
    })
    this.modalService.editBoardModal.subscribe(data=> {
      this.editBoardModal =data
    })
    this.modalService.deleteBoardModal.subscribe(data=> {
      this.deleteBoardModal =data
    })

    this.modalService.addColumnModal.subscribe(data=> {
      this.addColumnModal =data
    })
    this.modalService.sidebarModal.subscribe(data=> {
      this.sidebarModal =data
    })
  }

  
}
