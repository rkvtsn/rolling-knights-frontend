import { ValueProps } from "src/types/ValueProp";
import MarketItem from "../MarketItem";
import { MarketItem as IMarketItem } from "../types";

const MarketDisplay = ({ value: items }: ValueProps<IMarketItem[]>) => {
  return (
    <ul className="market-display">
      {items.map((item) => (
        <li key={item.name}>
          <MarketItem value={item} />
        </li>
      ))}
    </ul>
  );
};

export default MarketDisplay;
