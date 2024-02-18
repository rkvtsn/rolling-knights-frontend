import { PlayerState } from "src/types/states/PlayerState";
import { STAT_HAPPY_START } from "./stat";

export const DEFAULT_STATS: PlayerState = {
  glory: 0,
  happy: STAT_HAPPY_START,
  str: 0,
  agi: 0,
  int: 0,
  mods: []
};
