import { PROBLEM_TAGS, SORT_ORDER, SORT_FIELDS } from "../constants";

export type TProblemTag = (typeof PROBLEM_TAGS)[keyof typeof PROBLEM_TAGS];

export type TSortOrder = (typeof SORT_ORDER)[keyof typeof SORT_ORDER];

export type TSortField = (typeof SORT_FIELDS)[keyof typeof SORT_FIELDS];

export type TSort = {
  field: TSortField;
  order: TSortOrder;
};

export type TFilterState = {
  tags: TProblemTag[];
  ratings: [number, number];
  startTime?: [number, number];
  sort: TSort;
  offset: number;
  limit: number;
};
