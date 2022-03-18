import { v4 as uuid } from "uuid";

/**
 * PriceRange Database can be added here.
 * You can add price Range of your wish with different attributes
 * */

export const priceRanges = [
  {
    _id: uuid(),
    low: 1000,
    high: 9999,
  },
  {
    _id: uuid(),
    low: 10000,
    high: 19999,
  },
  {
    _id: uuid(),
    low: 20000,
    high: 29999,
  },
  {
    _id: uuid(),
    low: 30000,
    high: 39999,
  },
  {
    _id: uuid(),
    low: 40000,
    high: 100000,
  },
];
