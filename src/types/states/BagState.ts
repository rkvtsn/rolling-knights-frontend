import { BagItem } from "../domains/BagItem";

export interface BagState {
  items: BagItem[];
  grid: number[][];
}
