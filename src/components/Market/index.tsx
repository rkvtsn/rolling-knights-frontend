import { useMemo } from "react";
import { BagItemType } from "src/types/domains/BagItem";
import { useBag } from "src/hooks/useBag";
import MarketDisplay from "./MarketDisplay";
import { ITEMS } from "./constants/items";
import { MarketItem } from "./types";
import { findClustersInBag } from "./utils/findClustersInBag";
import "./styles.scss";

const Market = () => {
  const { bag } = useBag();

  const itemGroups = useMemo(() => {
    const groups = new Map<BagItemType, MarketItem[]>();
    const gridHeaps = findClustersInBag(bag.grid);
    console.log(gridHeaps);

    for (const item of ITEMS) {
      const isAvailable = false;

      groups.set(item.type, [
        ...(groups.get(item.type) ?? []),
        {
          ...item,
          isAvailable,
        },
      ]);
    }
    return groups;
  }, [bag.grid]);

  return (
    <div className="market">
      <h2>Market</h2>
      <div className="market__items">
        <MarketDisplay value={itemGroups.get(BagItemType.A) ?? []} />
        <MarketDisplay value={itemGroups.get(BagItemType.B) ?? []} />
        <MarketDisplay value={itemGroups.get(BagItemType.C) ?? []} />
      </div>
    </div>
  );
};

export default Market;
