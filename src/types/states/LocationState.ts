import { LocationAction } from "../domains/LocationAction";

export interface LocationState {
  available: LocationAction;
  active: number[];
  countdown: number;
}
