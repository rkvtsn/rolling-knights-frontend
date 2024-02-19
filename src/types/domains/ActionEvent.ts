import { ActionResult, IActionChallenge, LocationType } from "./Action";

export class ActionEvent implements IActionChallenge {
  challengNumber: number = 1;
  results: ActionResult[];
  title: string;
  type: LocationType = LocationType.EVENT;
  isMomental?: boolean | undefined;

  constructor(
    title: string,
    results: [ActionResult, ActionResult, ActionResult]
  ) {
    this.title = title;
    this.results = results;
  }
}
