import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eye-close-icon',
  templateUrl: './eye-close-icon.component.svg',
  styleUrls: ['./eye-close-icon.component.scss']
})
export class EyeCloseIconComponent {
  @Input() fill!:string
}
