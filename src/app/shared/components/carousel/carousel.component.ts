import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  query,
  style,
  animate,
  group,
} from '@angular/animations';
import { ImageModel } from '../../models/image.model';
import { ImageType } from '../../models/imageType.enum';
import * as data from '../../../../assets/mocks/images.json';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  counter: number = 0;
  data: ImageModel = data;
  ImageType = ImageType;
  images = [
    'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    'https://imgv3.fotor.com/images/cover-photo-image/AI-illustration-of-a-dragon-by-Fotor-AI-text-to-image-generator.jpg',
  ];
  constructor() {}

  ngOnInit() {}

  onNext() {
    if (this.counter != this.images.length - 1) {
      this.counter++;
    } else {
      this.counter = 0;
    }
  }

  onPrevious() {
    if (this.counter > 0) {
      this.counter--;
    } else {
      this.counter = this.images.length - 1;
    }
  }
}
