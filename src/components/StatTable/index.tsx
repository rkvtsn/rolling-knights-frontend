import Icon from "../Icon";
import { IconType } from "../Icon/IconType";
import { ValueProps } from "src/types/ValueProp";
import { StatTableItem } from "src/types/StatTableItem";
import "./styles.scss";

const StatTable = ({ icon, data, value }: StatTableProps) => {
  return (
    <div className="stat-table">
      <div className="stat-table__icon">
        <Icon icon={icon} />
      </div>
      {data.map(({ value: val, node }) => (
        <div
          key={val}
          className={`stat-table__cell ${
            val === value ? "stat-table__cell--active" : ""
          }`}
        >
          {node}
        </div>
      ))}
    </div>
  );
};

export default StatTable;

interface StatTableProps extends ValueProps<number> {
  icon: IconType;
  data: StatTableItem[];
  hasTitles: boolean;
}
