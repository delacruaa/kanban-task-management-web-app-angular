import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board-button',
  templateUrl: './board-button.component.html',
  styleUrls: ['./board-button.component.scss']
})
export class BoardButtonComponent {
  @Input() buttonClass!:string
}
