import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { Order } from "../entities/Order";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL, // Render te da esta URL completa
  synchronize: true, // ⚠️ solo para desarrollo
  logging: false,
  entities: [User, Credential, Order, Product, Category],
  ssl: {
    rejectUnauthorized: false, // necesario en Render
  },
});

