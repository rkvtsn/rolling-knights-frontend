import { STAT_HAPPY_END, STAT_HAPPY_START } from "src/constants/stat";
import { StatTableItem } from "src/types/StatTableItem";
import { range } from "src/utils/range";

export const HAPPY_STAT: StatTableItem[] = range<StatTableItem>({
  end: STAT_HAPPY_END + 1,
  start: STAT_HAPPY_START,
  mapper: (index: number) => {
    return {
      value: index,
      node: index,
    };
  },
});
