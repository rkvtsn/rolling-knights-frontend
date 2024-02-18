import { STAT_GLORY_MAX } from "src/constants/stat";
import { StatTableItem } from "src/types/StatTableItem";
import { range } from "src/utils/range";

export const VISIBLE_VALUES = new Set([1, 10, 20, 30]);

export const GLORY_STAT: StatTableItem[] = range<StatTableItem>({
  end: STAT_GLORY_MAX + 1,
  mapper: (index) => {
    const node = VISIBLE_VALUES.has(index) ? index : null;
    return {
      value: index,
      node,
    };
  },
});
