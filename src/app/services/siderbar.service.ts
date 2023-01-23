import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiderbarService {

  menu: any[] = [{
    titulo: 'Dashboard',
    icono: 'mdi mdi-gauge',
    submenu: [
      { titulo: 'Main', url: '/' },
      { titulo: 'ProgressBar', url: 'progress' },
      { titulo: 'Graficas', url: 'grafical' },
    ]
  }
];
  constructor() { }
}
