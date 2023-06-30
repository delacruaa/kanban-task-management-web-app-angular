import { Component, Input } from '@angular/core';
import { IColumn, ITask } from 'src/app/models/IBoard';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() columns!:IColumn
  @Input() tasks!:ITask[]
}
