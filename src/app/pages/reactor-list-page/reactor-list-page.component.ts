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
    status:{coreTempStatus: Status.inRange, powerProdStatus: Status.critical},
      reactorCoreTemperature: [{time: 1, value: 500, status: Status.inRange}, {time: 2, value: 121, status: Status.inRange},
        {time: 3, value: 11, status: Status.outOfRange},{time: 4, value: 640, status: Status.critical},{time: 5, value: 600, status: Status.critical}, {time: 6, value: 111, status: Status.inRange},
    {time: 7, value: 121, status: Status.inRange},{time: 8, value: 21, status: Status.outOfRange}],
      reactorPowerProduction:[{time: 1, value: 500, status: Status.inRange}, {time: 2, value: 121, status: Status.inRange},
        {time: 3, value: 11, status: Status.outOfRange},{time: 4, value: 640, status: Status.critical},{time: 5, value: 600, status: Status.critical}, {time: 6, value: 111, status: Status.inRange},
        {time: 7, value: 121, status: Status.inRange},{time: 8, value: 21, status: Status.outOfRange}],
    },
    {id:'2', name: 'Reactor 2',
    description: 'Lorem ipsum dolor sit amet consectetur. Adipiscing non pulvinar placerat lorem ullamcorper magna. Pulvinar bibendum enim.',
      status:{coreTempStatus: Status.inRange, powerProdStatus: Status.outOfRange},
      reactorCoreTemperature: [{time: 1, value: 500, status: Status.inRange}, {time: 2, value: 121, status: Status.inRange},
        {time: 3, value: 11, status: Status.outOfRange},{time: 5, value: 331, status: Status.critical}, {time: 6, value: 111, status: Status.inRange}],
      reactorPowerProduction: [{time: 1, value: 111, status: Status.inRange}, {time: 2, value: 121, status: Status.inRange},
        {time: 3, value: 11, status: Status.outOfRange},{time: 5, value: 331, status: Status.critical}, {time: 6, value: 211, status: Status.inRange}],
    }
  ]
}
