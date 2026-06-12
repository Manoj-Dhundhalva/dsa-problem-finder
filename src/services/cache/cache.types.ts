export type TCacheKey = string;

export type TCacheRecord<T = unknown> = {
  key: TCacheKey;
  value: T;
  expiry?: number;
};
