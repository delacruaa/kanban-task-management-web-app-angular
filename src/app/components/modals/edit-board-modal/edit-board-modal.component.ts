import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { IBoard, IColumn, ITask } from 'src/app/models/IBoard';
import { BoardService } from 'src/app/services/board.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-edit-board-modal',
  templateUrl: './edit-board-modal.component.html',
  styleUrls: ['./edit-board-modal.component.scss']
})
export class EditBoardModalComponent implements OnInit {

  formGroup!:FormGroup
  public submitted = false;
  boardList:IBoard[] = [] 
  currentBoard!:IBoard
  prevColumnName!:IColumn[]
  sameName=false
  sameColumn=false
  constructor(private boardService: BoardService, private modalService:ModalService){}
  ngOnInit(): void {
    this.boardService.getBoardList().subscribe(data=> {
      this.boardList= data
    })
    this.boardService.getBoard().subscribe(data=> {
      this.currentBoard= data
      this.prevColumnName = data.columns!
      let columnsArray = data.columns?.map(item=> {
        return new FormGroup({
          name:new FormControl(item.name, [Validators.required]),
        })
      })
      this.formGroup = new FormGroup({
        name:new FormControl(data.name, [Validators.required]),
        columns: new FormArray(columnsArray!)
      })
    })
  }
  checkSameName() {
    const existingObject = this.boardList.find(obj => obj.name.toLowerCase() === this.formGroup.value.name.toLowerCase());
    if (existingObject) {
      this.sameName= true
    } else {
      this.sameName= false
    }   
  }

  checkSameColumns() {
    for (let i = 0; i < this.formGroup.value.columns.length; i++) {
      for (let j = i + 1; j < this.formGroup.value.columns.length; j++) {
        if (this.formGroup.value.columns[i].name.trim().toLowerCase() === this.formGroup.value.columns[j].name.trim().toLowerCase()) {
          this.sameColumn= true
          
        }else {
          this.sameColumn= false
        }
      }
    }

  }
  get columnFormGroups () {
    return this.formGroup.get('columns') as FormArray
  }
  addColumn() {
    const column=<FormArray>this.formGroup.controls['columns'];
    column.push(
      new FormGroup({
        name:new FormControl('', [Validators.required]),
      })
    )
  }
  removeColumn(index:number) {
    const column=<FormArray>this.formGroup.controls['columns'];
    column.removeAt(index)
  }

  onKeyDown(event: any) {
    event.preventDefault(); 
  }
 
  submitForm() {
   
    this.submitted = true;
    if(this.formGroup.valid && !this.sameName) {
      //@ts-ignore
      let columns = this.formGroup.value.columns.map((item,index)=> {
        return {
          id:index.toString(),
          name: item.name
        }
      })
      let tasks:ITask[] =[]
      this.prevColumnName.forEach((col,indexCol)=> {
        tasks  = this.currentBoard.tasks.map((item,index)=> {
            if(item.status?.toLocaleLowerCase()===col.name.toLocaleLowerCase()) {
                return {...item, status:columns[indexCol].name}
            }
            return item
        })
      })
      let data:IBoard= {
        columns: columns,
        id: this.currentBoard.id,
        name: this.formGroup.value.name.trim(),
        tasks: tasks
      }

      this.submitted=false
      console.log(data)
      this.boardService.updateBoard(this.currentBoard.id,data).then(()=> {
        this.modalService.closeModal('editBoardModal')
        this.boardService.currentBoardName.next(this.formGroup.value.name.trim())
      }).catch(()=> {
        alert('something get wrong... try later')
      })
    
    }
  }
}
