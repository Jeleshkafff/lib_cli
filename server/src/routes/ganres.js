import { Router } from "express";
import { ganreController } from "../controllers";

// import {}
export const ganreRouter = Router();
ganreRouter.get("/", ganreController.getAll);
ganreRouter.get("/:id", ganreController.getOne);
ganreRouter.post("/add", ganreController.add) 
ganreRouter.put("/update/:id", ganreController.update) 
ganreRouter.delete("/delete/:id", ganreController.remove) 