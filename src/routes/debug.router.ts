import { Router } from "express";
import { AppDataSource } from "../config/dataSource";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { Order } from "../entities/Order";
import { Product } from "../entities/Product";
import { Category } from "../entities/Category";

const router = Router();

// GET /debug/users
router.get("/users", async (req, res) => {
  try {
    const repo = AppDataSource.getRepository(User);
    const data = await repo.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
});

// GET /debug/credentials
router.get("/credentials", async (req, res) => {
  try {
    const repo = AppDataSource.getRepository(Credential);
    const data = await repo.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener credenciales" });
  }
});

// GET /debug/orders
router.get("/orders", async (req, res) => {
  try {
    const repo = AppDataSource.getRepository(Order);
    const data = await repo.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener órdenes" });
  }
});

// GET /debug/products
router.get("/products", async (req, res) => {
  try {
    const repo = AppDataSource.getRepository(Product);
    const data = await repo.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener productos" });
  }
});

// GET /debug/categories
router.get("/categories", async (req, res) => {
  try {
    const repo = AppDataSource.getRepository(Category);
    const data = await repo.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener categorías" });
  }
});

export default router;
