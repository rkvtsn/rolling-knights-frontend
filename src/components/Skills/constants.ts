import { STAT_SKILL_MAX } from "src/constants/stat";
import { StatTableItem } from "src/types/StatTableItem";
import { range } from "src/utils/range";

export const SKILL_STR: StatTableItem[] = range({
  end: STAT_SKILL_MAX,
  mapper: (index) => {
    return {
      value: index,
    };
  },
});

export const SKILL_TITLE: StatTableItem[] = range({
  end: STAT_SKILL_MAX,
  mapper: (index) => {
    return {
      value: index,
      node: Math.ceil(index / 2),
    };
  },
});
