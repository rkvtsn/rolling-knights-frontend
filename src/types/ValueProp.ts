export interface ValueProps<T> {
  value: T;
}

export interface SetValueProps<T> extends ValueProps<T> {
  setValue: (value: T) => void;
}
