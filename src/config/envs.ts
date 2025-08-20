export const NODE_ENV = process.env.NODE_ENV || "development";

// Datos locales (desarrollo)
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_PORT = Number(process.env.DB_PORT) || 5432;
export const DB_USER = process.env.DB_USER || "postgres";
export const DB_PASSWORD = process.env.DB_PASSWORD || "tu_password_local";
export const DB_NAME = process.env.DB_NAME || "tu_base_local";

export const PORT = Number(process.env.PORT) || 3000;
export const JWT_SECRET = process.env.JWT_SECRET || "clave_secreta_local";
