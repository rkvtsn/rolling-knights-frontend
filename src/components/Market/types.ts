import { BagItem } from "src/types/domains/BagItem";

export interface MarketItem extends BagItem {
  isAvailable?: boolean;
}
