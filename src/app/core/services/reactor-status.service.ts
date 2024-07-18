import { Injectable } from '@angular/core';
import { ImageModel } from '../models/image.model';
import { Observable, of } from 'rxjs';
import * as dataReactorImages from '../../../assets/mocks/reactorsImages.json';
import * as dataReactor from '../../../assets/mocks/reactors.json';
import * as dataImage from '../../../assets/mocks/images.json';

import { ReactorModel } from '../models/reactor.model';
import { Status } from '../enums/status.enum';
import { SafetyStatusModel } from '../models/safetyStatus.model';

@Injectable({
  providedIn: 'root',
})
export class ReactorStatusService {
  constructor() {}

  getReactorImagesList(): Observable<ImageModel[]> {
    return of(dataReactorImages.images);
  }

  getReactors(): Observable<ReactorModel[]> {
    return of(
      dataReactor.list.map((reactor) => ({
        ...reactor,
        status: {
          coreTempStatus: reactor.status.coreTempStatus as Status,
          powerProdStatus: reactor.status.powerProdStatus as Status,
        },
        reactorPowerProduction: reactor.reactorPowerProduction.map((res) => ({
          ...res,
          status: res.status as Status,
        })),
        reactorCoreTemperature: reactor.reactorCoreTemperature.map((res) => ({
          ...res,
          status: res.status as Status,
        })),
      }))
    );
  }

  getReactorsSafetyStatus(): Observable<SafetyStatusModel> {
    const data = {
      ...dataReactor.status,
      statusPowerProduction: dataReactor.status.statusPowerProduction as Status,
      statusCoreTemperature: dataReactor.status.statusCoreTemperature as Status,
    };

    return of(data);
  }

  getReactorLocationImage(): Observable<ImageModel> {
    return of(dataImage.data);
  }
}
