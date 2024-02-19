import { ChildrenProps } from "src/types/ChildrenProps";
import "./styles.scss";

const Cell = ({ children, noborder = false, color, className }: CellProps) => {
  return (
    <div
      style={{ color }}
      className={`cell ${noborder ? "cell--noborder" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default Cell;

interface CellProps extends ChildrenProps {
  // @TODO add colors
  color?: string;
  className?: string;
  noborder?: boolean;
}
