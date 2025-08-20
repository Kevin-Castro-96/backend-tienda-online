"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dataSource_1 = require("../config/dataSource");
const User_1 = require("../entities/User");
const Credential_1 = require("../entities/Credential");
const Order_1 = require("../entities/Order");
const Product_1 = require("../entities/Product");
const Category_1 = require("../entities/Category");
const router = (0, express_1.Router)();
// GET /debug/users
router.get("/users", async (req, res) => {
    try {
        const repo = dataSource_1.AppDataSource.getRepository(User_1.User);
        const data = await repo.find();
        res.json(data);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error al obtener usuarios" });
    }
});
// GET /debug/credentials
router.get("/credentials", async (req, res) => {
    try {
        const repo = dataSource_1.AppDataSource.getRepository(Credential_1.Credential);
        const data = await repo.find();
        res.json(data);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error al obtener credenciales" });
    }
});
// GET /debug/orders
router.get("/orders", async (req, res) => {
    try {
        const repo = dataSource_1.AppDataSource.getRepository(Order_1.Order);
        const data = await repo.find();
        res.json(data);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error al obtener órdenes" });
    }
});
// GET /debug/products
router.get("/products", async (req, res) => {
    try {
        const repo = dataSource_1.AppDataSource.getRepository(Product_1.Product);
        const data = await repo.find();
        res.json(data);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error al obtener productos" });
    }
});
// GET /debug/categories
router.get("/categories", async (req, res) => {
    try {
        const repo = dataSource_1.AppDataSource.getRepository(Category_1.Category);
        const data = await repo.find();
        res.json(data);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error al obtener categorías" });
    }
});
exports.default = router;
