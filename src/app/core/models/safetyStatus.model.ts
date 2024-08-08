import { ReactorModel } from './reactor.model';
import { Status } from '../enums/status.enum';

export interface SafetyStatusModel {
  sectionInfo: string;
  statusPowerProduction: Status;
  statusCoreTemperature: Status;
}
export interface SafetyStatusDTO{
  sectionInfo: string;
  statusPowerProduction: Status;
  statusCoreTemperature: Status;
}