import { BagItemType } from "src/types/domains/BagItem";
import { MarketItem } from "../types";

const ITEM_B1: number[][] = [[1, 1]];

const ITEM_B2: number[][] = [
  [1, 0],
  [1, 1],
];

const ITEM_B3: number[][] = [
  [0, 1, 1],
  [1, 1, 0],
];

const ITEM_C1: number[][] = [[1, 1]];

const ITEM_C2: number[][] = [
  [0, 1, 0],
  [1, 0, 1],
];

const ITEM_C3: number[][] = [
  [0, 1, 0],
  [1, 1, 1],
];

const ITEM_A1: number[][] = [[1, 1]];

const ITEM_A2: number[][] = [[1, 1, 1]];

const ITEM_A3: number[][] = [
  [1, 1],
  [1, 1],
];

export const ITEMS: MarketItem[] = [
  {
    level: 1,
    name: "Kastet",
    schema: ITEM_A1,
    type: BagItemType.A,
    isAvailable: false,
  },
  {
    level: 2,
    name: "Sword",
    schema: ITEM_A2,
    type: BagItemType.A,
    isAvailable: false,
  },
  {
    level: 3,
    name: "Sheild",
    schema: ITEM_A3,
    type: BagItemType.A,
    isAvailable: false,
  },
  {
    level: 1,
    name: "Dagger",
    schema: ITEM_B1,
    type: BagItemType.B,
    isAvailable: false,
  },
  {
    level: 2,
    name: "Bow",
    schema: ITEM_B2,
    type: BagItemType.B,
    isAvailable: false,
  },
  {
    level: 3,
    name: "Nunjaki",
    schema: ITEM_B3,
    type: BagItemType.B,
    isAvailable: false,
  },
  {
    level: 1,
    name: "Potion",
    schema: ITEM_C1,
    type: BagItemType.C,
    isAvailable: false,
  },
  {
    level: 2,
    name: "Ward",
    schema: ITEM_C2,
    type: BagItemType.C,
    isAvailable: false,
  },
  {
    level: 3,
    name: "Book",
    schema: ITEM_C3,
    type: BagItemType.C,
    isAvailable: false,
  },
];
