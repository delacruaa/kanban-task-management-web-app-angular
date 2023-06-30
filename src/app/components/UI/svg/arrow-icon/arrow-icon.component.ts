import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-icon',
  templateUrl: './arrow-icon.component.svg',
  styleUrls: ['./arrow-icon.component.scss']
})
export class ArrowIconComponent {
  @Input() stroke ='#635FC7'
}
