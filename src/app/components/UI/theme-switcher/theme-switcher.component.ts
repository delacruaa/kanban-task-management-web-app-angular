import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  public isDark = false
  constructor(private themeService:ThemeService) {}
  ngOnInit(): void {
 
    if(localStorage.getItem('theme')===null) {
      localStorage.setItem('theme', JSON.stringify(this.isDark))
      document.body.setAttribute('data-theme' , 'light')
      this.themeService.currentTheme.next('light')
    }else {
      //@ts-ignore
      this.isDark= JSON.parse(localStorage.getItem('theme'))
      document.body.setAttribute('data-theme' , this.isDark? 'dark': 'light')
      this.themeService.currentTheme.next(this.isDark? 'dark': 'light')
    }
    
  }
  themeSwitcher () {
    this.isDark = !this.isDark
    document.body.setAttribute('data-theme' , this.isDark? 'dark': 'light')
    this.themeService.currentTheme.next(this.isDark? 'dark': 'light')
    localStorage.setItem('theme', JSON.stringify(this.isDark))
  }
}
