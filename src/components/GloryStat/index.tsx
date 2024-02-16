import { STAT_GLORY_MAX } from "src/constants/stat";
import { range } from "src/utils/range";
import Icon from "../Icon";
import { IconType } from "../Icon/IconType";

import { ValueProps } from "src/types/ValueProp";
import "./styles.scss";

const VISIBLE_VALUES = new Set([1, 10, 20, 30]);

const GloryStat = ({ value }: ValueProps<number>) => {
  return (
    <div className="glory-stat">
      <div>
        <Icon icon={IconType.STAT_GLORY} />
      </div>
      {range(STAT_GLORY_MAX + 1).map((index) => (
        <div
          key={index}
          className={`glory-stat__cell ${
            value === index ? "glory-stat__cell--active" : ""
          }`}
        >
          {VISIBLE_VALUES.has(index) ? index : ""}
        </div>
      ))}
    </div>
  );
};

export default GloryStat;
