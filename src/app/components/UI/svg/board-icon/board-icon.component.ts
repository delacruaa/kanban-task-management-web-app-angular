import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board-icon',
  templateUrl: './board-icon.component.svg',
  styleUrls: ['./board-icon.component.scss']
})
export class BoardIconComponent {
  @Input() fill!:string
}
