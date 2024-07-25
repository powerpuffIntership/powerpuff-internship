import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBtnComponent } from './components/custom-btn/custom-btn.component';
import { LegendComponent } from './components/legend/legend.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ImageComponent } from './components/image/image.component';
import { WarningComponent } from './components/warning/warning.component';
import { NgLetDirective } from './directives/ng-let.directive';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    CustomBtnComponent,
    LegendComponent,
    CarouselComponent,
    ImageComponent,
    WarningComponent,
    NgLetDirective,
    LoaderComponent,
  ],
  imports: [CommonModule, HttpClientModule, MatProgressSpinnerModule],
  exports: [
    CustomBtnComponent,
    LegendComponent,
    CarouselComponent,
    ImageComponent,
    WarningComponent,
    NgLetDirective,
    HttpClientModule,
    LoaderComponent,
  ],
})
export class SharedModule {}
