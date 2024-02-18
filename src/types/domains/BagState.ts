import { BagCell } from "./BagCell";
import { BagItem } from "./BagItem";

export interface BagState {
  items: BagItem[];
  cells: BagCell[];
}
