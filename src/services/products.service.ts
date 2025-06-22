import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";
import { Category } from "../entities/Category";
import { CategoryRepository } from "../repositories/category.respository";

export const checkProductExists = async (itemId: number): Promise<boolean> => {
  const item: Product | null = await ProductRepository.findOneBy({
    id: itemId,
  });
  return !!item;
};

export const getProductsService = async (): Promise<Product[]> => {
  return await ProductRepository.find();
};

export const getProductByIdService = async (id: number): Promise<Product | null> => {
  return await ProductRepository.findOneBy({ id });
};

export const createProductService = async (product: Product): Promise<Product> => {
  return await ProductRepository.save(product);
};

export const getProductsByCategoryService = async (categoryId: number) => {
  const category = await CategoryRepository.findOne({
    where: { id: categoryId },
    relations: ["products"],
  });

  if (!category) return null;

  return {
    categoryName: category.name,
    products: category.products,
  };
};



export const getCategoriesService = async (): Promise<Category[]> => {
  return await CategoryRepository.find();
};
