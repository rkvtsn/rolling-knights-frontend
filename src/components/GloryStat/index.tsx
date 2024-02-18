import { ValueProps } from "src/types/ValueProp";
import StatTable from "../StatTable";
import { GLORY_STAT } from "./constants";
import { IconType } from "../Icon/IconType";

const GloryStat = ({ value }: ValueProps<number>) => {
  return (
    <StatTable data={GLORY_STAT} icon={IconType.STAT_GLORY} value={value} />
  );
};

export default GloryStat;
