import { Component, Input } from '@angular/core';
import { Status } from "../../../../shared/models/status.enum";
import { CommonModule, NgSwitchCase } from "@angular/common";

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
  @Input() status: Status;
  statuses = Status;

}
