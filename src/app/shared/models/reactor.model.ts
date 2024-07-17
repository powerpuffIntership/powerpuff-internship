import { Status } from './status.enum';

export interface ReactorModel {
  id: string;
  name: string;
  status: Status;
  description?: string;
  reactorPowerProduction?: { time: number; value: number; status: Status }[];
  reactorCoreTemperature?: { time: number; value: number; status: Status }[];
}
