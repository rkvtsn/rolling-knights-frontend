import { ValueProps } from "src/types/ValueProp";
import StatTable from "../StatTable";
import { STAT_GLORY } from "./constants";
import { IconType } from "../Icon/IconType";
import Icon from "../Icon";

const StatGlory = ({ value }: ValueProps<number>) => {
  return (
    <StatTable data={STAT_GLORY} value={value}>
      <Icon icon={IconType.STAT_GLORY} />
    </StatTable>
  );
};

export default StatGlory;
