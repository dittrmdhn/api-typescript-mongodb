import { logger } from "../utils/logger";
import productModel from "../models/product.model";
import ProductType from "../types/product.type";

export const addProductToDB = async (payload: ProductType) => {
	const nameExist = await productModel.findOne({ name: payload.name });
	if (nameExist) {
		throw new Error("Product name already exist");
	}

	return await productModel.create(payload);
};

export const getProductFromDB = async () => {
	return await productModel
		.find()
		.then((data) => {
			return data;
		})
		.catch((error) => {
			logger.info("Cannot get data from DB");
			logger.error(error);
		});
};

export const getProductById = async (id: string) => {
	return await productModel.findOne({ product_id: id });
};

export const updateProductById = async (id: string, payload: ProductType) => {
	const result = await productModel.findOneAndUpdate(
		{
			product_id: id,
		},
		{ $set: payload }
	);

	return result;
};

export const deleteProductById = async (id: string) => {
	const result = await productModel.findOneAndDelete({ product_id: id });
	console.log(result);
	return result;
};
