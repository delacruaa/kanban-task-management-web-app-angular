import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IBoard } from 'src/app/models/IBoard';
import { BoardService } from 'src/app/services/board.service';
import { ModalService } from 'src/app/services/modal.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  isSidebarOpen!:boolean
  board!:IBoard 
  @Input() loading = false
  @Input() error = false
  constructor(private sidebarService:SidebarService, private boardService: BoardService, private modalService:ModalService,private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.sidebarService.getSidebarOpen().subscribe(data=> {
      this.isSidebarOpen = data
    })
    this.boardService.getBoard().subscribe(data=> {
      this.board = data
      console.log(data)
    })
    
  }

  openAddColumnModal() {
    this.modalService.openModal('addColumnModal')
  }


  @ViewChild('content', { read: ElementRef }) public content!: ElementRef<any>;


  public scrollRight(): void {
    this.content.nativeElement.scrollTo({ left: (this.content.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.content.nativeElement.scrollTo({ left: (this.content.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }
}
 