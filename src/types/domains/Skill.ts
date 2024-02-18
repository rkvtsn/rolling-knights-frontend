export enum SkillModType {
  BAG_1 = "BAG1",
  BAG_2 = "BAG2",
  JOKER_1 = "JOKER1",
  JOKER_2 = "JOKER2",
  REROLL_1 = "REROLL1",
  REROLL_2 = "REROLL2",
}

export interface Skill {
  value: number;
  mod?: SkillModType;
}
