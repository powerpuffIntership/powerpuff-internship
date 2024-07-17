import { Component, Input } from '@angular/core';
import { Status } from "../../../../shared/models/status.enum";

@Component({
  selector: 'app-core-temperature-chart',
  standalone: true,
  imports: [],
  templateUrl: './core-temperature-chart.component.html',
  styleUrl: './core-temperature-chart.component.scss'
})
export class CoreTemperatureChartComponent {
  @Input() chartData: { time: number; value: number; status: Status }[] | undefined = [];

}
