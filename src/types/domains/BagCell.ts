export enum BagCellType {
  EMPTY = "",
  COIN = "C",
  ITEM = "I",
}

export interface BagCell {
  value: BagCellType;
  isAvailable?: boolean;
}
