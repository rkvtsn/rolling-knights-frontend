import { ValueProps } from "src/types/ValueProp";
import { StatTableItem } from "src/types/StatTableItem";
import { WithChildrenProps } from "src/types/ChildrenProps";
import "./styles.scss";

const StatTable = ({
  data,
  value,
  children,
}: WithChildrenProps<StatTableProps>) => {
  return (
    <div className="stat-table">
      <div className="stat-table__icon">{children}</div>
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
  data: StatTableItem[];
}
