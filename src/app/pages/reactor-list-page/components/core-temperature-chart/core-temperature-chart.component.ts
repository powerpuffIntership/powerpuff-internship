import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Status } from "../../../../shared/models/status.enum";
import { Chart } from "chart.js/auto";
import { ChartStatusComponent } from "../chart-status/chart-status.component";
import { ChartService } from "../../services/chart.service";

@Component({
  selector: 'app-core-temperature-chart',
  standalone: true,
  imports: [
    ChartStatusComponent
  ],
  templateUrl: './core-temperature-chart.component.html',
  styleUrl: './core-temperature-chart.component.scss'
})
export class CoreTemperatureChartComponent implements AfterViewInit {
  @Input() chartData: { time: number; value: number; status: Status }[] | undefined;
  @Input() reactorId = '';
  @Input() reactorStatus = Status.inRange;
  chart: any = [];
  dataForChart: { colors: string[], labels: number[] };

  constructor(private chartService: ChartService) {
  }

  ngAfterViewInit() {
    this.dataForChart = this.chartService.getColorsAndLabelsForChart(this.chartData);
    this.chart = new Chart('core-temperature-chart' + this.reactorId, {
      type: 'line',
      data: {
        labels: this.dataForChart.labels,
        datasets: [
          {
            label: 'Core temperature chart',
            data: this.chartData,
            pointBackgroundColor: this.dataForChart.colors,
            pointBorderColor: this.dataForChart.colors,
            borderColor: this.dataForChart.colors,
            backgroundColor: this.dataForChart.colors,
            fill: false,
            tension: 0.2,
          },
        ],
      },
      options: {
        layout: {
          padding: 20
        },
        maintainAspectRatio: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'value'
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Power production output",
            color: '#000000',
            align: 'start',
            padding: {
              bottom: 20,
            },
            font: {
              size: 17,
              weight: "bold"
            }
          },
          legend: {
            display: false
          }
        },
      },
    });
  }



}
