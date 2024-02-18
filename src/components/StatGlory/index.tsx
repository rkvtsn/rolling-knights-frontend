import { ValueProps } from "src/types/ValueProp";
import StatTable from "../StatTable";
import { STAT_GLORY } from "./constants";
import { IconType } from "../Icon/IconType";

const StatGlory = ({ value }: ValueProps<number>) => {
  return (
    <StatTable data={STAT_GLORY} icon={IconType.STAT_GLORY} value={value} />
  );
};

export default StatGlory;
