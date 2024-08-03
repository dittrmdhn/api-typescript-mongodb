import { Request, Response } from "express";
import { logger } from "../utils/logger";
import {
	createProductValidation,
	updateProductValidation,
} from "../validations/product.validation";
import {
	addProductToDB,
	deleteProductById,
	getProductById,
	getProductFromDB,
	updateProductById,
} from "../services/product.service";
import { v4 as uuidv4 } from "uuid";

export const createProduct = async (req: Request, res: Response) => {
	req.body.product_id = uuidv4();

	const { error, value } = createProductValidation(req.body);
	if (error) {
		logger.error("ERR = ", "product - create", error.details[0].message);
		return res.status(422).send({
			status: false,
			statusCode: 422,
			message: error.details[0].message,
		});
	}

	try {
		await addProductToDB(value);
		logger.info("Succes post product");
		return res.status(200).send({
			statusCode: 201,
			status: true,

			message: "Add product success",
		});
	} catch (error) {
		logger.error("ERR = ", "product - create", error);

		return res.status(500).send({
			status: false,
			statusCode: 500,
			message: error,
		});
	}
};

export const getProduct = async (req: Request, res: Response) => {
	const {
		params: { id },
	} = req;

	if (id) {
		const product = await getProductById(id);

		if (!product) {
			return res.status(404).send({
				statusCode: false,
				status: 404,
				message: "Product not found",
			});
		}

		logger.info("Succes get product");
		return res.status(200).send({
			statusCode: true,
			data: product,
			status: 200,
		});
	} else {
		const products: any = await getProductFromDB();
		logger.info("Succes get product");
		return res.status(200).send({
			statusCode: true,
			data: products,
			status: 200,
		});
	}
};

export const updateProduct = async (req: Request, res: Response) => {
	const {
		params: { id },
	} = req;

	const { error, value } = updateProductValidation(req.body);
	if (error) {
		logger.error("ERR = ", "product - create", error.details[0].message);
		return res.status(422).send({
			status: false,
			statusCode: 422,
			message: error.details[0].message,
		});
	}

	try {
		const result = await updateProductById(id, value);
		if (result) {
			logger.info("Succes update product");
			return res.status(200).send({
				statusCode: 200,
				status: true,
				message: "Update product success",
			});
		} else {
			logger.info("Data not found");
			return res.status(404).send({
				statusCode: 404,
				status: true,
				message: "Data not found",
			});
		}
	} catch (error) {
		logger.error("ERR = ", "product - update", error);
		return res.status(422).send({
			status: false,
			statusCode: 422,
			message: error,
		});
	}
};

export const deleteProduct = async (req: Request, res: Response) => {
	const {
		params: { id },
	} = req;

	try {
		const result = await deleteProductById(id);
		if (result) {
			logger.info("Success delete product");
			return res.status(200).send({
				statusCode: 200,
				status: true,
				message: "delete product success",
			});
		} else {
			logger.info("Data not found");
			return res.status(404).send({
				statusCode: 404,
				status: true,
				message: "Data not found",
			});
		}
	} catch (error) {
		logger.error("ERR = ", "product - update", error);
		return res.status(422).send({
			status: false,
			statusCode: 422,
			message: error,
		});
	}
};
