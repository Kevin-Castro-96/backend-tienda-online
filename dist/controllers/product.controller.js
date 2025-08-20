"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsByCategory = exports.getCategories = exports.addProduct = exports.getProductById = exports.getProducts = void 0;
const catchedController_1 = require("../utils/catchedController");
const products_service_1 = require("../services/products.service");
const category_respository_1 = require("../repositories/category.respository");
const Product_1 = require("../entities/Product");
exports.getProducts = (0, catchedController_1.catchedController)(async (req, res) => {
    const products = await (0, products_service_1.getProductsService)();
    res.json(products);
});
exports.getProductById = (0, catchedController_1.catchedController)(async (req, res) => {
    const { id } = req.params;
    const idNumber = Number(id);
    const product = await (0, products_service_1.getProductByIdService)(idNumber);
    res.json(product);
});
exports.addProduct = (0, catchedController_1.catchedController)(async (req, res) => {
    const { name, description, price, stock, categoryId, image } = req.body;
    // Validar campos requeridos
    if (!name || !description || !price || !stock || !categoryId) {
        return res.status(400).json({ message: "Faltan campos obligatorios." });
    }
    // Verificar que la categoría exista
    const category = await category_respository_1.CategoryRepository.findOneBy({ id: categoryId });
    if (!category) {
        return res.status(404).json({ message: "Categoría no encontrada." });
    }
    // Crear instancia del producto
    const newProduct = new Product_1.Product();
    newProduct.name = name;
    newProduct.description = description;
    newProduct.price = price;
    newProduct.stock = stock;
    newProduct.image = image || null;
    newProduct.category = category;
    // Guardar en la base de datos
    const savedProduct = await (0, products_service_1.createProductService)(newProduct);
    return res.status(201).json(savedProduct);
});
exports.getCategories = (0, catchedController_1.catchedController)(async (_req, res) => {
    const categories = await (0, products_service_1.getCategoriesService)();
    res.json(categories);
});
exports.getProductsByCategory = (0, catchedController_1.catchedController)(async (req, res) => {
    const { id } = req.params;
    const categoryId = Number(id);
    if (isNaN(categoryId)) {
        return res.status(400).json({ message: "ID de categoría inválido." });
    }
    const result = await (0, products_service_1.getProductsByCategoryService)(categoryId);
    if (!result) {
        return res.status(404).json({ message: "Categoría no encontrada" });
    }
    res.json(result); // 👉 Ahora devuelve { categoryName, products }
});
