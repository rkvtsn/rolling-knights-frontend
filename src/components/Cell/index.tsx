import { useMemo } from "react";
import { ChildrenProps } from "src/types/ChildrenProps";
import "./styles.scss";

const Cell = ({
  children,
  onClick,
  noborder = false,
  color,
  className,
  row,
  col,
  value,
}: CellProps) => {
  const classNames = useMemo(() => {
    const classNames = ["cell"];
    if (noborder) {
      classNames.push("cell--noborder");
    }
    if (className?.length) {
      classNames.push(className);
    }
    return classNames;
  }, [className, noborder]);

  return (
    <div
      data-row={row}
      data-col={col}
      data-value={value}
      onClick={onClick}
      style={{ color }}
      className={classNames.join(" ")}
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
  onClick?: () => void;
  row?: number;
  col?: number;
  value?: number;
}
