import { Router } from "express";
import { movingsController } from "../controllers";

// import {}
export const movingsRouter = Router();
movingsRouter.get("/", movingsController.getAll);
movingsRouter.get("/:id", movingsController.getOne);
movingsRouter.post("/add", movingsController.add) 
movingsRouter.put("/update/:id", movingsController.update) 
movingsRouter.delete("/delete/:id", movingsController.remove) 