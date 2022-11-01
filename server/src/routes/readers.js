import { Router } from "express";
import { readersController } from "../controllers";

// import {}
export const readersRouter = Router();
readersRouter.get("/", readersController.getAll);
readersRouter.get("/:id", readersController.getOne);
readersRouter.post("/add", readersController.add) 
readersRouter.put("/update/:id", readersController.update) 
readersRouter.delete("/delete/:id", readersController.remove) 