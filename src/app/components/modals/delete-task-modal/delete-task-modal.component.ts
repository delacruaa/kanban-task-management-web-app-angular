import { Component, OnInit } from '@angular/core';
import { IBoard, ITask } from 'src/app/models/IBoard';
import { BoardService } from 'src/app/services/board.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-delete-task-modal',
  templateUrl: './delete-task-modal.component.html',
  styleUrls: ['./delete-task-modal.component.scss']
})
export class DeleteTaskModalComponent implements OnInit {
  task!:ITask
  currentBoard!:IBoard
  constructor(private boardService:BoardService, private modalService:ModalService){}
  ngOnInit(): void {
    this.boardService.getBoard().subscribe(data=> {
      this.currentBoard= data
    })
    this.boardService.getCurrentTask().subscribe(data=> {
      this.task=data
    })
  }

  deleteTask(){
    let taskId = 0
    this.currentBoard.tasks.forEach((item,index)=> {
      if(item.id==this.task.id) {
        taskId=index
      }
    })
    let tasks =this.currentBoard.tasks.filter((item,index) =>index!==taskId)
    this.boardService.deleteTask(this.currentBoard.id,tasks ).then(()=> {
      this.modalService.closeModal('deleteTaskModal') 
    }).catch(()=> {
      alert('something get wrong... try later')
    })

  }

  closeModal() {
    this.modalService.closeModal('deleteTaskModal') 
    this.modalService.openModal('viewTaskModal')
  }
}
