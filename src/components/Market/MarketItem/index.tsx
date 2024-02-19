import Cell from "src/components/Cell";
import CellRow from "src/components/CellRow";
import Icon from "src/components/Icon";
import { IconType } from "src/components/Icon/IconType";
import { ValueProps } from "src/types/ValueProp";
import { MarketItem as IMarketItem } from "../types";
import "./styles.scss";

const MarketItem = ({ value: item }: ValueProps<IMarketItem>) => {
  return (
    <div
      className={`market__item ${
        item.isAvailable ? "market__item--available" : ""
      }`}
    >
      <div>
        {item.name} ({item.type}
        {item.level})
      </div>
      <div>
        {item.schema.map((row, rowi) => (
          <CellRow key={rowi}>
            {row.map((cell, celli) => (
              <Cell key={celli} noborder={!cell}>
                {!!cell && <Icon icon={IconType.CELL_COIN} />}
              </Cell>
            ))}
          </CellRow>
        ))}
      </div>
    </div>
  );
};

export default MarketItem;
