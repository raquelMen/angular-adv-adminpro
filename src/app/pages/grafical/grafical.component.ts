import { Component } from '@angular/core';

import { ChartData } from 'chart.js';

@Component({

  selector: 'app-grafical',
  templateUrl: './grafical.component.html',
  styles: [
  ]
})
export class GraficalComponent {

  public labels1: string [] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  
  public data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [ 350, 450, 100 ] },
    ]
  };

}
