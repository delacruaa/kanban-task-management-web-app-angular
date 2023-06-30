import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/IBoard';
import { BoardService } from 'src/app/services/board.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task!:ITask
  @Input() status!:string
  subtitle!:string
  constructor(private modalService:ModalService,private boardService:BoardService) {}
  ngOnInit(): void {
    this.subtitle = `${this.task.subtasks? this.task.subtasks.filter(item=>item.isCompleted).length:0} of ${this.task.subtasks? this.task.subtasks.length:0} substasks`
   
  
  }

  openModal() {
    this.boardService.currentTask.next(this.task)
    this.modalService.openModal('viewTaskModal')
  }
}
