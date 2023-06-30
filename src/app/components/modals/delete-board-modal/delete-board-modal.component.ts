import { Component, OnInit } from '@angular/core';
import { ITask, IBoard } from 'src/app/models/IBoard';
import { BoardService } from 'src/app/services/board.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-delete-board-modal',
  templateUrl: './delete-board-modal.component.html',
  styleUrls: ['./delete-board-modal.component.scss']
})
export class DeleteBoardModalComponent implements OnInit {
  currentBoard!:IBoard
  boardList:IBoard[] = [] 
  constructor(private boardService:BoardService, private modalService:ModalService){}
  ngOnInit(): void {
    this.boardService.getBoard().subscribe(data=> {
      this.currentBoard= data
    })
    this.boardService.getBoardList().subscribe(boardList=> {
      this.boardList =boardList.slice(1)
    })
  }

  deleteBoard(){
    this.boardService.deleteBoard(this.currentBoard.id).then(()=> {
      this.boardService.currentBoardName.next(this.boardList.slice(1)[0].name)
      this.closeModal()
    }).catch(()=> {
      alert('something get wrong... try later')
    })

  }

  closeModal() {
    this.modalService.closeModal('deleteBoardModal') 
  }
}
