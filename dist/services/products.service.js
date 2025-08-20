"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoriesService = exports.getProductsByCategoryService = exports.createProductService = exports.getProductByIdService = exports.getProductsService = exports.checkProductExists = void 0;
const product_repository_1 = require("../repositories/product.repository");
const category_respository_1 = require("../repositories/category.respository");
const checkProductExists = async (itemId) => {
    const item = await product_repository_1.ProductRepository.findOneBy({
        id: itemId,
    });
    return !!item;
};
exports.checkProductExists = checkProductExists;
const getProductsService = async () => {
    return await product_repository_1.ProductRepository.find();
};
exports.getProductsService = getProductsService;
const getProductByIdService = async (id) => {
    return await product_repository_1.ProductRepository.findOneBy({ id });
};
exports.getProductByIdService = getProductByIdService;
const createProductService = async (product) => {
    return await product_repository_1.ProductRepository.save(product);
};
exports.createProductService = createProductService;
const getProductsByCategoryService = async (categoryId) => {
    const category = await category_respository_1.CategoryRepository.findOne({
        where: { id: categoryId },
        relations: ["products"],
    });
    if (!category)
        return null;
    return {
        categoryName: category.name,
        products: category.products,
    };
};
exports.getProductsByCategoryService = getProductsByCategoryService;
const getCategoriesService = async () => {
    return await category_respository_1.CategoryRepository.find();
};
exports.getCategoriesService = getCategoriesService;
