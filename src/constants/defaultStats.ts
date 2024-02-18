import { StatsState } from "src/types/StatsState";
import { STAT_HAPPY_START } from "./stat";

export const DEFAULT_STATS: StatsState = {
  glory: 0,
  happy: STAT_HAPPY_START,
  str: 0,
  agi: 0,
  int: 0,
};
