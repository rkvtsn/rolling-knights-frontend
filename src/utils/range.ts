export const range = function <T>({
  end,
  start = 0,
  step = 1,
  mapper,
}: RangeProps<T>): T[] {
  const arr: T[] = [];
  for (let i = start; i < end; i += step) {
    arr.push(mapper(i));
  }
  return arr;
};

interface RangeProps<T> {
  end: number;
  start?: number;
  step?: number;
  mapper: (index: number) => T;
}
