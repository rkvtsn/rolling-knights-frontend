export enum BagItemType {
  A = "A",
  B = "B",
  C = "C",
}

export interface BagItem {
  name: string;
  type: BagItemType;
  level: 1 | 2 | 3;
  schema: number[][];
}
