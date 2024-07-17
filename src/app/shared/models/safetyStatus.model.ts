import { ReactorModel } from './reactor.model';
import { Status } from './status.enum';

export interface SafetyStatusModel {
  sectionInfo: string;
  statusPowerProduction: Status;
  statusCoreTemperature: Status;
  extendedStatus?: ReactorModel;
}
