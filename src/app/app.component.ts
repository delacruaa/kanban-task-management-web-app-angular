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
  viewTaskModalIsOpen=false
  deleteTaskModalIsOpen= false
  editTaskModalIsOpen=false
  createBoardModalIsOpen=false
  editBoardModalIsOpen=false
  deleteBoardModalIsOpen=false
  addColumnModalIsOpen=false
  sidebarModalIsOpen=false
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

    this.modalService.viewTaskModalIsOpen.subscribe(data=> {
      this.viewTaskModalIsOpen =data
    })
    this.modalService.deleteTaskModalIsOpen.subscribe(data=> {
      this.deleteTaskModalIsOpen =data
    })
    this.modalService.editTaskModalIsOpen.subscribe(data=> {
      this.editTaskModalIsOpen =data
    })
    this.modalService.createBoardModalIsOpen.subscribe(data=> {
      this.createBoardModalIsOpen =data
    })
    this.modalService.editBoardModalIsOpen.subscribe(data=> {
      this.editBoardModalIsOpen =data
    })
    this.modalService.deleteBoardModalIsOpen.subscribe(data=> {
      this.deleteBoardModalIsOpen =data
    })

    this.modalService.addColumnModalIsOpen.subscribe(data=> {
      this.addColumnModalIsOpen =data
    })
    this.modalService.sidebarModalIsOpen.subscribe(data=> {
      this.sidebarModalIsOpen =data
    })
  }

  
}
