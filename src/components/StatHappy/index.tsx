import { ValueProps } from "src/types/ValueProp";
import StatTable from "../StatTable";
import { STAT_HAPPY } from "./constants";
import { IconType } from "../Icon/IconType";

const StatHappy = ({ value }: ValueProps<number>) => {
  return (
    <StatTable data={STAT_HAPPY} value={value} icon={IconType.STAT_HAPPY} />
  );
};

export default StatHappy;
