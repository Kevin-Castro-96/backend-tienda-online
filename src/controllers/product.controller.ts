import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import {
  getProductsService,
  getProductByIdService,
  getProductsByCategoryService,
  getCategoriesService,
  createProductService,
} from "../services/products.service";
import { CategoryRepository } from "../repositories/category.respository";
import { Product } from "../entities/Product";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);
export const getProductById = catchedController(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const idNumber = Number(id);
    const product = await getProductByIdService(idNumber);
    res.json(product);
  }
);

export const addProduct = catchedController(
  async (req: Request, res: Response) => {
    const { name, description, price, stock, categoryId, image } = req.body;

    // Validar campos requeridos
    if (!name || !description || !price || !stock || !categoryId) {
      return res.status(400).json({ message: "Faltan campos obligatorios." });
    }

    // Verificar que la categoría exista
    const category = await CategoryRepository.findOneBy({ id: categoryId });

    if (!category) {
      return res.status(404).json({ message: "Categoría no encontrada." });
    }

    // Crear instancia del producto
    const newProduct = new Product();
    newProduct.name = name;
    newProduct.description = description;
    newProduct.price = price;
    newProduct.stock = stock;
    newProduct.image = image || null;
    newProduct.category = category;

    // Guardar en la base de datos
    const savedProduct = await createProductService(newProduct);

    return res.status(201).json(savedProduct);
  }
);

export const getCategories = catchedController(
  async (_req: Request, res: Response) => {
    const categories = await getCategoriesService();
    res.json(categories);
  }
);

export const getProductsByCategory = catchedController(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const categoryId = Number(id);

    if (isNaN(categoryId)) {
      return res.status(400).json({ message: "ID de categoría inválido." });
    }

    const result = await getProductsByCategoryService(categoryId);

    if (!result) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }

    res.json(result); // 👉 Ahora devuelve { categoryName, products }
  }
);

