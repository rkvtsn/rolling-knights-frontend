import { PlayerState } from "src/types/states/PlayerState";
import { STAT_HAPPY_START } from "./stat";
import { BAG_DEFAULT } from "./bagState";

export const PLAYER_DEFAULT: PlayerState = {
  glory: 0,
  happy: STAT_HAPPY_START,
  str: 0,
  agi: 0,
  int: 0,
  mods: [],
  actionPoints: 0,
  bag: BAG_DEFAULT,
};
