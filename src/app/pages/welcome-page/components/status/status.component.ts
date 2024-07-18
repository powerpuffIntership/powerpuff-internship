import { Component, Input } from '@angular/core';
import { SafetyStatusModel } from '../../../../shared/models/safetyStatus.model';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
})
export class StatusComponent {
  @Input() status!: SafetyStatusModel;
}
