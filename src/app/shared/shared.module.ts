import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomBtnComponent } from './components/custom-btn/custom-btn.component';
import { LegendComponent } from './components/legend/legend.component';


@NgModule({
  declarations: [ HeaderComponent, FooterComponent, CustomBtnComponent, LegendComponent ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CustomBtnComponent,
    LegendComponent
  ]
})
export class SharedModule { }
