import { Component } from '@angular/core';
import { PowerProductionChartComponent } from "../power-production-chart/power-production-chart.component";
import { CoreTemperatureChartComponent } from "../core-temperature-chart/core-temperature-chart.component";

@Component({
  selector: 'app-reactor-component',
  standalone: true,
  imports: [
    PowerProductionChartComponent,
    CoreTemperatureChartComponent
  ],
  templateUrl: './reactor-component.component.html',
  styleUrl: './reactor-component.component.scss'
})
export class ReactorComponentComponent {
  items = [1,2,3]

}
