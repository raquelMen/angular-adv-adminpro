import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { FormsModule }  from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ComponetsModule } from '../components/componets.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficalComponent } from './grafical/grafical.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';




@NgModule({
  declarations: [
    DashboardComponent,
     ProgressComponent,
     GraficalComponent,
     PagesComponent,
     AccountSettingsComponent,
     PromesasComponent,
     RxjsComponent
  ],
  exports: [
    DashboardComponent,
     ProgressComponent,
     GraficalComponent,
     PagesComponent,
     AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ComponetsModule
  ]
})
export class PagesModule { }
