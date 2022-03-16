import { Response } from "miragejs";

/**
 * All the routes related to Price Range are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all Price Ranges in the db.
 * send GET Request at /api/priceranges
 * */

export const getAllPriceRangesHandler = function () {
  try {
    return new Response(200, {}, { priceRanges: this.db.priceRanges });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
