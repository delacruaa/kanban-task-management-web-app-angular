import { Component, Input, OnInit } from '@angular/core';

import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-logo-icon',
  templateUrl: './logo-icon.component.svg',
  styleUrls: ['./logo-icon.component.scss']
})
export class LogoIconComponent  implements OnInit{
  fill!:string
  constructor(private themeService:ThemeService) {}
  ngOnInit() {
    this.themeService.currentTheme.subscribe(theme => {
      this.fill = theme =='dark'? '#FFF':'#000012'
     
    });
  }
  
}
