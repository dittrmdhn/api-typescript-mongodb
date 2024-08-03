import { Router } from "express";
import {
	createProduct,
	deleteProduct,
	getProduct,
	updateProduct,
} from "../controllers/product.controller";
import { requireAdmin } from "../middleware/auth";

export const ProductRouter: Router = Router();

ProductRouter.get("/", requireAdmin, getProduct);
ProductRouter.get("/:id", getProduct);
ProductRouter.post("/", createProduct);
ProductRouter.put("/:id", updateProduct);
ProductRouter.delete("/:id", deleteProduct);
