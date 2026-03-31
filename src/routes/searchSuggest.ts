import { Router } from "express";
import { ZodError } from "zod";
import { catalogIndex } from "../data/catalog.js";
import { searchRequestSchema } from "../domain/types.js";
import { suggestCatalog } from "../search/suggestCatalog.js";

export const searchSuggestRouter = Router();

searchSuggestRouter.get("/", (req, res, next) => {
  try {
    const input = searchRequestSchema.parse(req.query);
    const response = suggestCatalog(input, catalogIndex);
    res.status(200).json(response);
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({
        error: "invalid_search_request",
        issues: error.issues
      });
      return;
    }

    next(error);
  }
});
