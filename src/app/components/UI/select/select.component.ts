import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() contents:string[]= []
  @Input() currentContent=''
  @Output() currentContentChanged: EventEmitter<string> = new EventEmitter();
  @Input() isDropdownOpen!:boolean
  editCurrentContent(content:string) {
    this.contents.forEach(item=> {
      if(content == item) {
        this.currentContent = content
        this.currentContentChanged.emit(content)
      }
    })
  }
}
