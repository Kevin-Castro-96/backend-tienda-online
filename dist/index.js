"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dataSource_1 = require("./config/dataSource");
const preLoadCategories_1 = require("./helpers/preLoadCategories");
const preLoadProducts_1 = require("./helpers/preLoadProducts");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const PORT = process.env.PORT || 4000;
const initialize = async () => {
    try {
        console.log("🔄 Inicializando servidor...");
        await dataSource_1.AppDataSource.initialize();
        console.log("📦 Base de datos conectada");
        // Preloads iniciales
        await (0, preLoadCategories_1.preLoadCategories)();
        await (0, preLoadProducts_1.preLoadProducts)();
        app.listen(PORT, () => {
            console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
        });
    }
    catch (error) {
        console.error("❌ Error inicializando:", error);
    }
};
initialize();
