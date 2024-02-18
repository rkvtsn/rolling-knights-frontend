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

export class ActionDay implements IAction {
  title: string;
  type: LocationType = LocationType.DAY;
  isMomental?: boolean = false;

  constructor(title: string, isMomental?: boolean) {
    this.title = title;
    this.isMomental = isMomental;
  }
}

export interface IActionChallenge extends IAction {
  challengNumber: number;
  results: ActionResult[];
}

export interface ActionEvent extends IActionChallenge {}

export class ActionTournament implements IActionChallenge {
  type: LocationType = LocationType.TOURNAMENT;
  challengNumber: number = 4;
  results: ActionResult[];
  title: string;

  constructor(title: string, results: ActionResult[]) {
    this.results = results;
    this.title = title;
  }
}

export class ActionCombat implements IActionChallenge {
  type: LocationType = LocationType.COMBAT;
  challengNumber: number = 3;
  title: string;
  results: ActionResult[];

  constructor(title: string, results: ActionResult[]) {
    this.title = title;
    this.results = results;
  }
}
