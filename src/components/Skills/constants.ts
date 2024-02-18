import { STAT_SKILL_MAX } from "src/constants/stat";
import { StatTableItem } from "src/types/StatTableItem";
import { range } from "src/utils/range";
import { IconType } from "../Icon/IconType";

export const STR_MOD = {
  3: IconType.MOD_BAG,
  5: IconType.MOD_BAG,
};

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
