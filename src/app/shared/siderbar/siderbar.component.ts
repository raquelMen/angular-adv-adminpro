import { Component, OnInit } from '@angular/core';
import { SiderbarService } from 'src/app/services/siderbar.service';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styles: [
  ]
})
export class SiderbarComponent implements OnInit{

  menuItems: any [];

  constructor(private sidebarService: SiderbarService){
    this.menuItems = sidebarService.menu;
  }

  ngOnInit(): void {
    
  }

}
