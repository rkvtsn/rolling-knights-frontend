import { BagState } from "./BagState";
import { SkillModType } from "../domains/Skill";

export interface PlayerState {
  // stats lvl
  glory: number;
  happy: number;
  // skills lvl
  str: number;
  agi: number;
  int: number;
  // modificators from skills
  mods: SkillModType[];
  // bag with items
  bag: BagState;
  // left actions
  actionPoints: number;
}
