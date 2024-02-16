import { STAT_HAPPY_START } from "./stat";

export interface StatsState {
  glory: number;
  happy: number;
  str: number;
  agi: number;
  int: number;
}

export const DEFAULT_STATS: StatsState = {
  glory: 0,
  happy: STAT_HAPPY_START,
  str: 0,
  agi: 0,
  int: 0,
};
