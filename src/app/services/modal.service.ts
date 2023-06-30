import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  addTaskModalIsOpen =new BehaviorSubject<boolean>(false)
  viewTaskModalIsOpen =new BehaviorSubject<boolean>(false)
  deleteTaskModalIsOpen =new BehaviorSubject<boolean>(false)
  editTaskModalIsOpen=new BehaviorSubject<boolean>(false)
  createBoardModalIsOpen=new BehaviorSubject<boolean>(false)
  editBoardModalIsOpen=new BehaviorSubject<boolean>(false)
  deleteBoardModalIsOpen=new BehaviorSubject<boolean>(false)
  addColumnModalIsOpen=new BehaviorSubject<boolean>(false)
  sidebarModalIsOpen=new BehaviorSubject<boolean>(false)
  constructor() { }

  openModal(modalName:string) {
    if(modalName==='addTaskModal') {
      this.addTaskModalIsOpen.next(true)
    }
    if(modalName==='viewTaskModal') {
      this.viewTaskModalIsOpen.next(true)
    }
    if(modalName === 'deleteTaskModal') {
      this.deleteTaskModalIsOpen.next(true)
    }
    if(modalName === 'editTaskModal') {
      this.editTaskModalIsOpen.next(true)
    }
    if(modalName === 'createBoardModal') {
      this.createBoardModalIsOpen.next(true)
    }
    if(modalName === 'editBoardModal') {
      this.editBoardModalIsOpen.next(true)
    }
    if(modalName === 'deleteBoardModal') {
      this.deleteBoardModalIsOpen.next(true)
    }
    if(modalName === 'addColumnModal') {
      this.addColumnModalIsOpen.next(true)
    }
    if(modalName === 'sidebarModal') {
      this.sidebarModalIsOpen.next(true)
    }
  }

  closeModal(modalName:string) {
    if(modalName==='addTaskModal') {
      this.addTaskModalIsOpen.next(false)
    }
    if(modalName==='viewTaskModal') {
      this.viewTaskModalIsOpen.next(false)
    }
    if(modalName === 'deleteTaskModal') {
      this.deleteTaskModalIsOpen.next(false)
    }
    if(modalName === 'editTaskModal') {
      this.editTaskModalIsOpen.next(false)
    }
    if(modalName === 'createBoardModal') {
      this.createBoardModalIsOpen.next(false)
    }
    if(modalName === 'editBoardModal') {
      this.editBoardModalIsOpen.next(false)
    }
    if(modalName === 'deleteBoardModal') {
      this.deleteBoardModalIsOpen.next(false)
    }
    if(modalName === 'addColumnModal') {
      this.addColumnModalIsOpen.next(false)
    }
    if(modalName === 'sidebarModal') {
      this.sidebarModalIsOpen.next(false)
    }
  }
}
