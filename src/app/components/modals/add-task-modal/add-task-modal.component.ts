import { Component, ElementRef, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { IBoard, ISubtask, ITask } from 'src/app/models/IBoard';
import { BoardService } from 'src/app/services/board.service';
import { ModalService } from 'src/app/services/modal.service';



@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss']
})
export class AddTaskModalComponent {
  selects!:string[] 
  currentSelect!:string
  isDropdownOpen=false
  formGroup!:FormGroup
  public submitted = false;
  boardList:IBoard[] = [] 
  currentBoard!:IBoard
  constructor(private elementRef: ElementRef,private boardService: BoardService, private modalService:ModalService){}
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title:new FormControl('', [Validators.required]),
      description:new FormControl(''),
      subtasks: new FormArray([
        new FormGroup({
          title:new FormControl('', [Validators.required]),
        })
      ])
    })
    this.boardService.getBoard().subscribe(data=> {
      this.currentBoard= data
      if(data.columns?.length) {
        this.selects= data.columns?.map(item=> {
          return  item.name
        })
        this.currentSelect = this.selects[0]
      } 
    })
    this.boardService.getBoardList().subscribe(data=> {
      this.boardList = data.slice(1)
    })
    
  }

  get subtaskFormGroups () {
    return this.formGroup.get('subtasks') as FormArray
  }
  addSubtask() {
    const subtask=<FormArray>this.formGroup.controls['subtasks'];
    subtask.push(
      new FormGroup({
        title:new FormControl('', [Validators.required]),
      })
    )
  }
  removeSubtask(index:number) {
    const subtask=<FormArray>this.formGroup.controls['subtasks'];
    subtask.removeAt(index)
  }
  currentContentChanged(newValue: string) {
    this.currentSelect = newValue;
    this.isDropdownOpen=false
  }
  openDropdown() {
    this.isDropdownOpen=!this.isDropdownOpen
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
    
      this.isDropdownOpen=false
    }
  }
  onKeyDown(event: any) {
    event.preventDefault(); 
  }
 
  closeModal() {
    this.modalService.closeModal('addTaskModal')
  }


  submitForm() {
   
    this.submitted = true;
    
    if(this.formGroup.valid) {
      //@ts-ignore
      let subtasks = this.formGroup.value.subtasks.map((item,index)=> {
        return {
          id:index.toString(),
          title: item.title,
          isCompleted:false
        }
      })
      let data:ITask= {
        description: this.formGroup.value.description.trim(),
        id: new Date().getTime().toString(),
        status: this.currentSelect,
        title: this.formGroup.value.title.trim(),
        subtasks:subtasks
      }

      let lastTaskId=0;
      this.currentBoard.tasks.length? lastTaskId = this.currentBoard.tasks.length:lastTaskId =0
      this.submitted=false
      this.boardService.createTask(this.currentBoard.id,lastTaskId,data).then(()=> {
        this.modalService.closeModal('addTaskModal')
      }).catch(()=> {
        alert('something get wrong... try later')
      })
    
    }
  }
}
