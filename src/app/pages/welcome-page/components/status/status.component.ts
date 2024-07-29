import { Component, Input } from '@angular/core';
import { SafetyStatusModel } from '../../../../core/models/safetyStatus.model';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
})
export class StatusComponent {
  @Input() status!: SafetyStatusModel;
}
