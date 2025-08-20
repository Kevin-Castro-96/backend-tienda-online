import { Router } from "express";
import { getProducts, getProductById, addProduct, getProductsByCategory, getCategories } from "../controllers/product.controller";

const router = Router();

// Rutas específicas primero
router.get("/categories", getCategories);
router.get("/categories/:id", getProductsByCategory);

// Luego las generales
router.get("/", getProducts);
router.post("/", addProduct);
router.get("/:id", getProductById);


export default router;
