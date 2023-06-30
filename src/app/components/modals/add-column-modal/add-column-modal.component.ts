import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { IBoard, IColumn } from 'src/app/models/IBoard';
import { BoardService } from 'src/app/services/board.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-add-column-modal',
  templateUrl: './add-column-modal.component.html',
  styleUrls: ['./add-column-modal.component.scss']
})
export class AddColumnModalComponent implements OnInit {
 
  formGroup!:FormGroup
  public submitted = false;
  boardList:IBoard[] = [] 
  currentBoard!:IBoard
  sameColumn=false
  constructor(private boardService: BoardService, private modalService:ModalService){}
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name:new FormControl('', [Validators.required]),
    })
    this.boardService.getBoard().subscribe(data=> {
      this.currentBoard= data
     
    })
    this.boardService.getBoardList().subscribe(data=> {
      this.boardList = data.slice(1)
    })
    
  }

  checkSameColumn() {
    const existingObject = this.currentBoard.columns!.find(obj => obj.name.toLowerCase() === this.formGroup.value.name.toLowerCase());
    if (existingObject) {
      this.sameColumn=true
    } else {
      this.sameColumn=false
    }  
  }
  closeModal() {
    this.modalService.closeModal('addColumnModal')
  }
  submitForm() {
   
    this.submitted = true;
    let id =  new Date().getTime()
    if(this.formGroup.valid && !this.sameColumn) {
      let lastColumnId=0;
      this.currentBoard.columns?.length? lastColumnId = this.currentBoard.columns.length:lastColumnId =0
      let data:IColumn= {
        id:lastColumnId.toString(),
        name:  this.formGroup.value.name.trim(),
      }

     
      this.submitted=false
      this.boardService.addColumn(this.currentBoard.id,lastColumnId,data).then(()=> {
        this.modalService.closeModal('addColumnModal')
      }).catch(()=> {
        alert('something get wrong... try later')
      })
    }
  }
}
