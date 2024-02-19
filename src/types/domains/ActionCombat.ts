import { ActionResult, IActionChallenge, LocationType } from "./Action";
import { BagItemType } from "./BagItem";

export class ActionCombat implements IActionChallenge {
  type: LocationType = LocationType.COMBAT;
  challengNumber: number = 3;
  title: string;
  booster: BagItemType;
  results: ActionResult[];
  isMomental?: boolean = false;

  constructor(
    title: string,
    results: ActionResult[],
    booster: BagItemType,
    isMomental?: boolean
  ) {
    this.title = title;
    this.results = results;
    this.booster = booster;
    this.isMomental = isMomental;
  }
}
