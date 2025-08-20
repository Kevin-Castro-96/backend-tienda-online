import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./config/dataSource";
import { preLoadCategories } from "./helpers/preLoadCategories";
import { preLoadProducts } from "./helpers/preLoadProducts";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

const initialize = async () => {
  try {
    console.log("🔄 Inicializando servidor...");
    await AppDataSource.initialize();
    console.log("📦 Base de datos conectada");

    // Preloads iniciales
    await preLoadCategories();
    await preLoadProducts();

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error inicializando:", error);
  }
};

initialize();


