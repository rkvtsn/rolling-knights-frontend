import { ActionResult, IActionChallenge, LocationType } from "./Action";
import { BagItem } from "./BagItem";

export class ActionTournament implements IActionChallenge {
  type: LocationType = LocationType.TOURNAMENT;
  challengNumber: number = 4;
  results: ActionResult[];
  title: string;
  requirements: BagItem[];

  constructor(title: string, results: ActionResult[], requirements: BagItem[]) {
    this.results = results;
    this.title = title;
    this.requirements = requirements;
  }
}
