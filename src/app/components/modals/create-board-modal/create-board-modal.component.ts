import { Component,  OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { IBoard, ITask } from 'src/app/models/IBoard';
import { BoardService } from 'src/app/services/board.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-create-board-modal',
  templateUrl: './create-board-modal.component.html',
  styleUrls: ['./create-board-modal.component.scss']
})
export class CreateBoardModalComponent implements OnInit {
  
  formGroup!:FormGroup
  public submitted = false;
  boardList:IBoard[] = [] 
  currentBoard!:IBoard
  sameName=false
  sameColumn=false
  constructor(private boardService: BoardService, private modalService:ModalService){}
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name:new FormControl('', [Validators.required]),
      columns: new FormArray([
        new FormGroup({
          name:new FormControl('', [Validators.required]),
        })
      ])
    })
    this.boardService.getBoard().subscribe(data=> {
      this.currentBoard= data
     
    })
    this.boardService.getBoardList().subscribe(data=> {
      this.boardList = data.slice(1)
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
        if (this.formGroup.value.columns[i].name === this.formGroup.value.columns[j].name) {
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
    let id =  new Date().getTime()
   
    if(this.formGroup.valid && !this.sameName && !this.sameColumn) {
      //@ts-ignore
      let columns = this.formGroup.value.columns.map((item,index)=> {
        return {
          id:index.toString(),
          name: item.name
        }
      })
      let data:IBoard= {
        columns: columns,
        id: id.toString(),
        name: this.formGroup.value.name.trim(),
        tasks: [
          {
              "id":"0",
              "title": "Build UI for onboarding flow",
              "description": "",
              "status": "Todo",
              "subtasks": [
                {
                  "id":"1",
                  "title": "Sign up page",
                  "isCompleted": true
                },
                {
                  "id":"2",
                  "title": "Sign in page",
                  "isCompleted": false
                },
                {
                  "id":"3",
                  "title": "Welcome page",
                  "isCompleted": false
                }
              ]
            },
          ]
      }

      this.submitted=false
      console.log(data)
      this.boardService.createBoard(id,data).then(()=> {
        this.modalService.closeModal('createBoardModal')
      }).catch(()=> {
        alert('something get wrong... try later')
      })
    
    }
  }
}
