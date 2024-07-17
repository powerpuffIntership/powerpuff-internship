import { Component } from '@angular/core';
import { ReactorComponentComponent } from "./components/reactor-component/reactor-component.component";
import { CommonModule } from "@angular/common";
import { ReactorModel } from "../../shared/models/reactor.model";
import { Status } from "../../shared/models/status.enum";

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

  description ='Lorem ipsum dolor sit amet consectetur. Adipiscing non pulvinar placerat lorem ullamcorper magna. ' +
    'Pulvinar bibendum enim eget nullam lacus urna. Consequat lorem lectus imperdiet tincidunt. Orci magnis tempus tempus sit.';

  reactors: ReactorModel[] = [
    {id:'1', name: 'Reactor 1',
    description: 'Lorem ipsum dolor sit amet consectetur. Adipiscing non pulvinar placerat lorem ullamcorper magna. Pulvinar bibendum enim.',
    status: Status.inRange,
      reactorCoreTemperature: [],
      reactorPowerProduction: []
    }, {id:'2', name: 'Reactor 2',
    description: 'Lorem ipsum dolor sit amet consectetur. Adipiscing non pulvinar placerat lorem ullamcorper magna. Pulvinar bibendum enim.',
    status: Status.inRange, reactorCoreTemperature: [], reactorPowerProduction: []}]
}
