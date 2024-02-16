import { STAT_GLORY_MAX } from "src/constants/stat";
import { range } from "src/utils/range";
import Icon from "../Icon";
import { IconType } from "../Icon/IconType";

import "./styles.scss";

const VISIBLE_VALUES = new Set([1, 10, 20, 30]);

const GloryStat = () => {
  return (
    <div className="glory-stat">
      <div>
        <Icon icon={IconType.STAT_GLORY} />
      </div>
      {range(STAT_GLORY_MAX + 1).map((value) => (
        <div key={value}>{VISIBLE_VALUES.has(value) ? value : ""}</div>
      ))}
    </div>
  );
};

export default GloryStat;
