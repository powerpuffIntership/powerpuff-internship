import { Injectable } from '@angular/core';
import { Status } from '../../../core/enums/status.enum';
import { ChartDataModel } from '../../../core/models/reactor.model';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor() {}

  getColorsAndLabelsForChart(chartData: ChartDataModel[] | undefined): {
    colors: string[];
    labels: number[];
  } {
    let colors = [];
    let labels = [];
    if (chartData) {
      let maxValue = 0;
      for (var i = 0; i < chartData?.length; i++) {
        var color;
        switch (chartData ? chartData[i].status : []) {
          case Status.critical:
            color = '#f93b18';
            break;
          case Status.outOfRange:
            color = '#ffda00';
            break;
          case Status.inRange:
            color = '#2071b5';
            break;
        }
        colors.push(color!);
      }
      for (let i = 1; i <= maxValue; i++) {
        labels.push(i);
      }
    }
    return { colors: colors, labels: labels };
  }
}
