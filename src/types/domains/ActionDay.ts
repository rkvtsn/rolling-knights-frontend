import { IAction, LocationType } from "./Action";

export class ActionDay implements IAction {
  title: string;
  type: LocationType = LocationType.DAY;
  isMomental?: boolean = false;

  constructor(title: string, isMomental?: boolean) {
    this.title = title;
    this.isMomental = isMomental;
  }
}
