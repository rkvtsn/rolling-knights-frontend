import { ValueProps } from "src/types/ValueProp";
import StatTable from "../StatTable";
import { STAT_HAPPY } from "./constants";
import { IconType } from "../Icon/IconType";
import Icon from "../Icon";

const StatHappy = ({ value }: ValueProps<number>) => {
  return (
    <StatTable data={STAT_HAPPY} value={value}>
      <Icon icon={IconType.STAT_HAPPY} />
    </StatTable>
  );
};

export default StatHappy;
