import { Status } from '../enums/status.enum';

export interface ReactorModel {
  id: string;
  name: string;
  status: ReactorStatus;
  description?: string;
  reactorPowerProduction?: { time: number; value: number }[];
  reactorCoreTemperature?: { time: number; value: number }[];
  links?: string[];
}

export interface ReactorStatus {
  coreTempStatus: Status;
  powerProdStatus: Status;
}
