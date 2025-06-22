import { Router } from "express";
import { getProducts, getProductById, addProduct, getProductsByCategory, getCategories } from "../controllers/product.controller";

const router = Router();

router.get("/categories", getCategories);
router.get("/", getProducts);
router.post("/", addProduct);
router.get("/:id", getProductById);
router.get("/categories/:id", getProductsByCategory);


export default router;
