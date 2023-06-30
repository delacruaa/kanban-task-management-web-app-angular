import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonClass!: string;
  @Input() type:string ='button'
  @Input() width:boolean =false
  @Input() disabled:boolean =false
}
