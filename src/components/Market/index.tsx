import MarketItem from "./MarketItem";
import { ITEM_B1, ITEM_B2, ITEM_B3 } from "./constants/itemsAgi";
import { ITEM_C1, ITEM_C2, ITEM_C3 } from "./constants/itemsInt";
import { ITEM_A1, ITEM_A2, ITEM_A3 } from "./constants/itemsStr";
import "./styles.scss";

const Market = () => {
  return (
    <div className="market">
      <h2>Market</h2>
      <div className="market__items">
        <ul>
          <li>
            A1
            <MarketItem schema={ITEM_A1} />
          </li>
          <li>
            B1
            <MarketItem schema={ITEM_B1} />
          </li>
          <li>
            C1
            <MarketItem schema={ITEM_C1} />
          </li>
        </ul>
        <ul>
          <li>
            A2
            <MarketItem schema={ITEM_A2} />
          </li>
          <li>
            B2
            <MarketItem schema={ITEM_B2} />
          </li>
          <li>
            C2 <MarketItem schema={ITEM_C2} />
          </li>
        </ul>
        <ul>
          <li>
            A3 <MarketItem schema={ITEM_A3} />
          </li>
          <li>
            B3 <MarketItem schema={ITEM_B3} />
          </li>
          <li>
            C3 <MarketItem schema={ITEM_C3} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Market;
