import { ChildrenProps } from "src/types/ChildrenProps";
import "./styles.scss"

const CellRow = ({ children }: ChildrenProps) => {
  return <div className="cell-row">{children}</div>;
};

export default CellRow;
