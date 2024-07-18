import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Status } from "../../../../shared/models/status.enum";
import { Chart } from "chart.js/auto";
import { ChartStatusComponent } from "../chart-status/chart-status.component";
import { ChartService } from "../../services/chart.service";

@Component({
  selector: 'app-power-production-chart',
  standalone: true,
  imports: [
    ChartStatusComponent
  ],
  templateUrl: './power-production-chart.component.html',
  styleUrl: './power-production-chart.component.scss'
})
export class PowerProductionChartComponent implements AfterViewInit {
  @Input() chartData: { time: number; value: number; status: Status }[] | undefined = [];
  @Input() reactorId = '';
  @Input() reactorStatus = Status.inRange;
  dataForChart: { colors: string[], labels: number[] };
  chart: any = [];


  constructor(private chartService: ChartService) {
  }

  ngAfterViewInit() {
    this.dataForChart = this.chartService.getColorsAndLabelsForChart(this.chartData);
    this.chart = new Chart('powerProductionChart' + this.reactorId, {
      type: 'bar',
      data: {
        labels: this.dataForChart.labels,
        datasets: [
          {
            label: 'Power production chart',
            data: this.chartData,
            borderWidth: 1,
            backgroundColor: this.dataForChart.colors,
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
