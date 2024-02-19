/**
 * should be converted to specific class
 */
export interface IAction {
  title: string;
  // type guard
  type: LocationType;
  isMomental?: boolean;
}

export enum LocationType {
  DAY = "DAY",
  EVENT = "EVENT",
  COMBAT = "COMBAT",
  TOURNAMENT = "TOURNAMENT",
}

export enum ActionResultType {
  BUILD = "BUILD",
  TRAIN = "TRAIN",
  WORK = "WORK",
  BUY = "BUY",
  HAPPY = "HAPPY",
  GLORY = "GLORY",
}

export interface ActionResult {
  value: number;
  type: ActionResult;
}

export interface IActionChallenge extends IAction {
  challengNumber: number;
  results: ActionResult[];
}
