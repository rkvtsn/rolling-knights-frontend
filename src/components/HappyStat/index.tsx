import { ValueProps } from "src/types/ValueProp";
import StatTable from "../StatTable";
import { HAPPY_STAT } from "./constants";
import { IconType } from "../Icon/IconType";

const HappyStat = ({ value }: ValueProps<number>) => {
  return (
    <StatTable data={HAPPY_STAT} value={value} icon={IconType.STAT_HAPPY} />
  );
};

export default HappyStat;
