import { Router } from "express";
import { booksController } from "../controllers";

// import {}
export const booksRouter = Router();
booksRouter.get("/", booksController.getAll);
booksRouter.get("/:id", booksController.getOne);
booksRouter.post("/add", booksController.add) 
booksRouter.put("/update/:id", booksController.update) 
booksRouter.delete("/delete/:id", booksController.remove) 