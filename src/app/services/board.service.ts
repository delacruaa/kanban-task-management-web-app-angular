import { Injectable } from '@angular/core';
import { IBoard, IColumn, ITask } from '../models/IBoard';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  boardList:IBoard[] = [] 
  currentBoardName = new BehaviorSubject<string>('')
  currentBoard = new BehaviorSubject<IBoard>({ } as IBoard)
  currentTask =new BehaviorSubject<ITask>({ } as ITask)

  constructor(private db: AngularFireDatabase) {}
  getBoardList() {
    return  this.db.list<IBoard>('/').valueChanges().pipe(
      catchError(error => {
        console.error('Error fetching data:', error);
        return throwError('Something went wrong');
      })
    )
  }
  getCurrentBoardName( ) {
    return this.currentBoardName.asObservable()
  }
  getBoard() {
    return this.currentBoard.asObservable()
  }
  getCurrentTask() {
    return this.currentTask.asObservable()
  }

  createTask(id:string,lastTaskId:number,data:ITask ) {
    return this.db.object(`${id}/tasks/${lastTaskId}`).set(data)
  }
  updateTask(currentBoardId:string,taskId:number,data:ITask) {
    return this.db.object(`${currentBoardId}/tasks/${taskId}`).set(data)
  }
  updateTaskStatus(currentBoardId:string, taskId:number,name:string) {
    return this.db.object(`${currentBoardId}/tasks/${taskId}`).update({
      status:name
    })
  }

  updateSubtaskCompleted(currentBoardId:string, taskId:number,subtaskId:string,isCompleted:boolean) {
    return this.db.object(`${currentBoardId}/tasks/${taskId}/subtasks/${subtaskId}`).update({
      isCompleted:!isCompleted
    })
  }

  deleteTask(currentBoardId:string, tasks:ITask[]) {
    return this.db.object(`${currentBoardId}`).update({
      tasks:tasks
    })
  }

  createBoard(id:number, data:IBoard) {
    return this.db.object(`${id}`).set(data)
  }

  updateBoard(currentBoardId:string, data:IBoard) {
    return this.db.object(`${currentBoardId}`).set(data)
  }

  deleteBoard(currentBoardId:string) {
    return this.db.object(`${currentBoardId}`).remove()
  }

  addColumn(currentBoardId:string, lastColumnId:number,data:IColumn) {
    return this.db.object(`${currentBoardId}/columns/${lastColumnId}`).set(data)
  }
}
