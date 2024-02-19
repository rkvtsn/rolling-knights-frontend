export enum BagItemType {
  A = "A",
  B = "B",
  C = "C",
}

export type BagItemLevel = 1 | 2 | 3;

export interface BagItem {
  name: string;
  type: BagItemType;
  level: BagItemLevel;
}
