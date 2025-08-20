"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const router = (0, express_1.Router)();
// Rutas específicas primero
router.get("/categories", product_controller_1.getCategories);
router.get("/categories/:id", product_controller_1.getProductsByCategory);
// Luego las generales
router.get("/", product_controller_1.getProducts);
router.post("/", product_controller_1.addProduct);
router.get("/:id", product_controller_1.getProductById);
exports.default = router;
