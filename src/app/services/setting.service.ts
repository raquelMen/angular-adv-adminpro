import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {


  private LinkTheme =  document.querySelector('#theme');


  constructor() { 

    const url =  localStorage.getItem('theme') ||  './assets/css/colors/purple-dark.css';
    this.LinkTheme?.setAttribute('href', url);

  }

  changeTheme( theme: string){
     
    const url = `./assets/css/colors/${theme}.css`;

    this.LinkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);

  }

}
