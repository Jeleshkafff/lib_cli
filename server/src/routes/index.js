import { Router } from "express";
import { booksRouter } from "./books";
import { authorRouter } from "./authors";
import { ganreRouter } from "./ganres";
import { readersRouter } from "./readers";
import { movingsRouter } from "./movings";

export const appRouter = Router();
appRouter.use("/books", booksRouter);
appRouter.use("/authors", authorRouter);
appRouter.use("/ganers", ganreRouter);
appRouter.use("/readers", readersRouter);
appRouter.use("/movings", movingsRouter);
