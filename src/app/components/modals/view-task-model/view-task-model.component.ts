import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { IBoard, ISubtask, ITask } from 'src/app/models/IBoard';
import { BoardService } from 'src/app/services/board.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-view-task-model',
  templateUrl: './view-task-model.component.html',
  styleUrls: ['./view-task-model.component.scss']
})
export class ViewTaskModelComponent implements OnInit{
  selects!:string[] 
  currentSelect!:string
  isSelectOpen=false
  isDropdownOpen=false
  currentBoard!:IBoard
  task!:ITask 
  subtasks!:ISubtask[]
  completedSubtaskCount!:number
  constructor(private elementRef: ElementRef,private boardService: BoardService, private modalService:ModalService){}
  ngOnInit(): void {
    this.boardService.getBoard().subscribe(data=> {
      this.currentBoard= data
      if(data.columns?.length) {
        this.selects= data.columns?.map(item=> {
          return  item.name
        })
        
      } 
    })
    this.boardService.getCurrentTask().subscribe(data=> {
      this.task=data
      this.currentSelect = data.status!
      this.subtasks = data.subtasks || []
      this.completedSubtaskCount = data.subtasks?.filter(item=>item.isCompleted).length || 0
    })
  }

  currentContentChanged(newValue: string) {
    let taskId=0
    this.currentBoard.tasks.forEach((item,index)=> {
      if(item.id==this.task.id) {
        taskId=index
    }
    })
    this.boardService.updateTaskStatus(this.currentBoard.id,taskId, newValue )
    this.currentSelect = newValue;
    this.isSelectOpen=false
  }
  openSelect() {
    this.isSelectOpen=!this.isSelectOpen
  }

  openDropdown() {
    this.isDropdownOpen=!this.isDropdownOpen
  }

  openDeleteModal() {
    this.modalService.openModal('deleteTaskModal')
    this.modalService.closeModal('viewTaskModal')
  }


  openEditModal() {
    this.modalService.openModal('editTaskModal')
    this.modalService.closeModal('viewTaskModal')
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
    
      this.isSelectOpen=false
      this.isDropdownOpen=false
    }
  }
  onKeyDown(event: any) {
    event.preventDefault(); 
  }
  closeModal() {
    this.modalService.closeModal('viewTaskModal')
  }
  updateSubtaskCompleted(id:string, isCompleted:boolean) {
    this.subtasks = this.subtasks.map(item=> {
      if(item.id==id) {
        return {...item, isCompleted:!isCompleted}
      }
      
      return item
     
    })
    this.completedSubtaskCount = this.subtasks?.filter(item=>item.isCompleted).length || 0
    let taskId=0
    this.currentBoard.tasks.forEach((item,index)=> {
      if(item.id==this.task.id) {
        taskId=index
    }
    })
    this.boardService.updateSubtaskCompleted(this.currentBoard.id,taskId,id,isCompleted )
  }


  
}
