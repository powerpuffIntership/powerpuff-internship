import { Component, Input, OnInit } from '@angular/core';
import { Status } from "../../../../shared/models/status.enum";
import { Chart } from "chart.js/auto";

@Component({
  selector: 'app-power-production-chart',
  standalone: true,
  imports: [],
  templateUrl: './power-production-chart.component.html',
  styleUrl: './power-production-chart.component.scss'
})
export class PowerProductionChartComponent implements OnInit{
  @Input() chartData: { time: number; value: number; status: Status }[] | undefined = [];
  title = 'ng-chart';
  chart: any = [];

  constructor() {}

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: 'Power production chart',
            data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: [
              '#044882',
            ],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Power production output" ,
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
