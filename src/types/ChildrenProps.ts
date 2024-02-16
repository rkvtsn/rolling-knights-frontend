import { ReactNode } from "react";

export interface ChildrenProps {
  children?: ReactNode;
}

export type WithChildrenProps<T> = T & ChildrenProps;
