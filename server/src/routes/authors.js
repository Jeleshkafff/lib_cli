import { Router } from "express";
import { authorController } from "../controllers";

// import {}
export const authorRouter = Router();
authorRouter.get("/", authorController.getAll);
authorRouter.get("/:id", authorController.getOne);
authorRouter.post("/add", authorController.add) 
authorRouter.put("/update/:id", authorController.update) 
authorRouter.delete("/delete/:id", authorController.remove) 