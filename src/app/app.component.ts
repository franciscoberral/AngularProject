import { Component, OnInit } from '@angular/core';
import { INote } from './model/INote';
import { ThemeService } from './theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'holamundo';
  isDarkMode: boolean;

  constructor(private themeService: ThemeService){
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }

  public alerta(){
    alert("Alerta Roja");
  }

  toggleDarkMode(){
    this.isDarkMode = this.themeService.isDarkMode();

    this.isDarkMode
      ? this.themeService.update('light-mode')
      : this.themeService.update('dark-mode');
  }
}
