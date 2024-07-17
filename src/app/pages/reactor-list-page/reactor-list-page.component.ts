import { Component } from '@angular/core';
import { ReactorComponentComponent } from "./components/reactor-component/reactor-component.component";
import { CommonModule
} from "@angular/common";

@Component({
  selector: 'app-reactor-list-page',
  standalone: true,
  imports: [
    ReactorComponentComponent,
    CommonModule
  ],
  templateUrl: './reactor-list-page.component.html',
  styleUrl: './reactor-list-page.component.scss'
})
export class ReactorListPageComponent {

  items = [1,2]
}
