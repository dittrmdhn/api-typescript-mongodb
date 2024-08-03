"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductById = exports.updateProductById = exports.getProductById = exports.getProductFromDB = exports.addProductToDB = void 0;
const logger_1 = require("../utils/logger");
const product_model_1 = __importDefault(require("../models/product.model"));
const addProductToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const nameExist = yield product_model_1.default.findOne({ name: payload.name });
    if (nameExist) {
        throw new Error("Product name already exist");
    }
    return yield product_model_1.default.create(payload);
});
exports.addProductToDB = addProductToDB;
const getProductFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.default
        .find()
        .then((data) => {
        return data;
    })
        .catch((error) => {
        logger_1.logger.info("Cannot get data from DB");
        logger_1.logger.error(error);
    });
});
exports.getProductFromDB = getProductFromDB;
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.default.findOne({ product_id: id });
});
exports.getProductById = getProductById;
const updateProductById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findOneAndUpdate({
        product_id: id,
    }, { $set: payload });
    return result;
});
exports.updateProductById = updateProductById;
const deleteProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findOneAndDelete({ product_id: id });
    console.log(result);
    return result;
});
exports.deleteProductById = deleteProductById;
//# sourceMappingURL=product.service.js.map