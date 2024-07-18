import { Component, Input } from '@angular/core';
import { ImageModel } from '../../models/image.model';
import { ImageType } from '../../models/imageType.enum';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @Input()
  image!: ImageModel;
  @Input() style: ImageType = ImageType.full;
  ImageType = ImageType;
}
