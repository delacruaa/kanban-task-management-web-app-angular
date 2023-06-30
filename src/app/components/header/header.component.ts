import { Component, ElementRef, HostListener, Input} from '@angular/core';
import { IBoard } from 'src/app/models/IBoard';
import { ModalService } from 'src/app/services/modal.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  isOpenDropdown=false
  isSidebarOpen!:boolean
  addTaskModalIsOpen=false
  @Input() currentBoardName!:string
  @Input() boardList!:IBoard[]
  constructor(private elementRef: ElementRef,private sidebarService:SidebarService,private modalService:ModalService) {}
  ngOnInit(): void {
    this.sidebarService.getSidebarOpen().subscribe(data=> {
      this.isSidebarOpen = data
    })
    this.modalService.addTaskModalIsOpen.subscribe(data=> {
      this.addTaskModalIsOpen =data
      console.log(data)
    })
    
  }
  openDropdown() {
    this.isOpenDropdown =!this.isOpenDropdown
  }
  openModal() {
    
    this.modalService.openModal('addTaskModal')
  }
  openEditBoardModal() {
    this.modalService.openModal('editBoardModal')
    
  }
  openDeleteBoardModal() {
    this.modalService.openModal('deleteBoardModal')
  }
  openSidebarModal() {
    this.modalService.openModal('sidebarModal')
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
    
      this.isOpenDropdown=false
    }
  }


  

  

}
