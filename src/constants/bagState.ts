import { BagState } from "src/types/states/BagState";

export const BAG_GRID_DEFAULT: number[][] = Array(6)
  .fill(0)
  .map(() => Array(5).fill(0));

export const BAG_DEFAULT: BagState = {
  grid: BAG_GRID_DEFAULT,
  items: [],
};
