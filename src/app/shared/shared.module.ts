import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBtnComponent } from './components/custom-btn/custom-btn.component';
import { LegendComponent } from './components/legend/legend.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ImageComponent } from './components/image/image.component';
import { WarningComponent } from './components/warning/warning.component';
import { NgLetDirective } from './directives/ng-let.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CustomBtnComponent,
    LegendComponent,
    CarouselComponent,
    ImageComponent,
    WarningComponent,
    NgLetDirective,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [
    CustomBtnComponent,
    LegendComponent,
    CarouselComponent,
    ImageComponent,
    WarningComponent,
    NgLetDirective,
    HttpClientModule,
  ],
})
export class SharedModule {}
