import Cell from "src/components/Cell";
import CellRow from "src/components/CellRow";
import Icon from "src/components/Icon";
import { IconType } from "src/components/Icon/IconType";

const MarketItem = ({ schema }: MarketItemProps) => {
  return (
    <div className="market__item">
      {schema.map((row, rowi) => (
        <CellRow key={rowi}>
          {row.map((cell, celli) => (
            <Cell key={celli} noborder={!cell}>
              {!!cell && <Icon icon={IconType.CELL_COIN} />}
            </Cell>
          ))}
        </CellRow>
      ))}
    </div>
  );
};

export default MarketItem;

interface MarketItemProps {
  schema: number[][];
}
