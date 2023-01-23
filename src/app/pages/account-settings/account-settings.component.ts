import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public LinkTheme =  document.querySelector('#theme');
  public links:  NodeListOf<Element> = document.querySelectorAll('.selector');

  constructor(private settingsServices: SettingService){

  }

  ngOnInit(): void {
     this.links = document.querySelectorAll('.selector');
     this.checkCurrentTheme();
  }

  changeTheme( theme: string){

    this.settingsServices.changeTheme(theme);
    this.checkCurrentTheme();

  }

  checkCurrentTheme(){
    
    this.links.forEach( elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.LinkTheme?.getAttribute('href');

      if (btnThemeUrl === currentTheme){
          elem.classList.add('working');
      }
    });
  
  }

}


