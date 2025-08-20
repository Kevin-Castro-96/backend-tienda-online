// src/server.ts
import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes";
import { AppDataSource } from "./config/dataSource";
import { PORT } from "./config/envs";
import { preLoadCategories } from "./helpers/preLoadCategories";
import { preLoadProducts } from "./helpers/preLoadProducts";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Rutas
app.use(router);

// Error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).json({
    statusCode: err.statusCode || 500,
    message: err.message || "Internal Server Error",
  });
});

// Inicializar DB y levantar servidor
const initialize = async () => {
  try {
    console.log("Initializing database...");
    await AppDataSource.initialize();
    console.log("Database initialized");

    // Preload
    await preLoadCategories();
    await preLoadProducts();

    // Levantar servidor
    const port = PORT || 3000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error("Error initializing server:", err);
  }
};

initialize();
