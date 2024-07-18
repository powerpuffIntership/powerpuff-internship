import { Component, Input } from '@angular/core';
import { PowerProductionChartComponent } from "../power-production-chart/power-production-chart.component";
import { CoreTemperatureChartComponent } from "../core-temperature-chart/core-temperature-chart.component";
import { ReactorModel } from "../../../../shared/models/reactor.model";
import { ChartStatusComponent } from "../chart-status/chart-status.component";

@Component({
  selector: 'app-reactor-component',
  standalone: true,
    imports: [
        PowerProductionChartComponent,
        CoreTemperatureChartComponent,
        ChartStatusComponent
    ],
  templateUrl: './reactor-component.component.html',
  styleUrl: './reactor-component.component.scss'
})
export class ReactorComponentComponent {
  @Input() reactorModel: ReactorModel;
  items = [1,2,3]

}
