type ValueOf<T> = T[keyof T];

export type Column = {
  [key: string]: string;
};

export const DEFAULT_COLUMN_NAME = Object.freeze({
  key: 'code'
});
