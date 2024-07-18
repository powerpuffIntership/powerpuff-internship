import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomBtnComponent } from './components/custom-btn/custom-btn.component';
import { LegendComponent } from './components/legend/legend.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ImageComponent } from './components/image/image.component';
import { WarningComponent } from './components/warning/warning.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CustomBtnComponent,
    LegendComponent,
    CarouselComponent,
    ImageComponent,
    WarningComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    CustomBtnComponent,
    LegendComponent,
    CarouselComponent,
    ImageComponent,
    WarningComponent,
  ],
})
export class SharedModule {}
