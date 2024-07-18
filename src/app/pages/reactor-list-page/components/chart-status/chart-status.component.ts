import { Component, Input } from '@angular/core';
import { Status } from "../../../../shared/models/status.enum";
import { CommonModule, NgSwitchCase } from "@angular/common";
import _default from "chart.js/dist/plugins/plugin.legend";
import title = _default.defaults.title;

@Component({
  selector: 'app-chart-status',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './chart-status.component.html',
  styleUrl: './chart-status.component.scss'
})
export class ChartStatusComponent {
  @Input() title: string;
  @Input() status: Status;
  statuses = Status;

}
