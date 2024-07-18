import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import * as data from '../../../assets/mocks/images.json';
import * as dataReactor from '../../../assets/mocks/reactors.json';

import { ImageModel } from '../../shared/models/image.model';
import { ImageType } from '../../shared/models/imageType.enum';
import { StatusComponent } from './components/status/status.component';
import { ButtonType } from '../../shared/models/buttonType.enum';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [SharedModule, StatusComponent],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss',
})
export class WelcomePageComponent {
  data: ImageModel = data;
  ImageType = ImageType;
  ButtonType = ButtonType;
}
