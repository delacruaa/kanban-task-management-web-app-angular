import { Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  addTaskModal =new BehaviorSubject<boolean>(false)
  viewTaskModal =new BehaviorSubject<boolean>(false)
  deleteTaskModal =new BehaviorSubject<boolean>(false)
  editTaskModal=new BehaviorSubject<boolean>(false)
  createBoardModal=new BehaviorSubject<boolean>(false)
  editBoardModal=new BehaviorSubject<boolean>(false)
  deleteBoardModal=new BehaviorSubject<boolean>(false)
  addColumnModal=new BehaviorSubject<boolean>(false)
  sidebarModal=new BehaviorSubject<boolean>(false)
  modalArr=['addTaskModal','viewTaskModal','deleteTaskModal','editTaskModal','createBoardModal','deleteBoardModal','addColumnModal','sidebarModal','editBoardModal']

  openModal(modalName:string) {
    this.modalArr.forEach(item=> {
      if(modalName===item) {
        //@ts-ignore
        this[modalName].next(true)
      }
    })
    
    
  }

  closeModal(modalName:string) {
    this.modalArr.forEach(item=> {
      if(modalName===item) {
        //@ts-ignore
        this[modalName].next(false)
      }
    })
  }
}
