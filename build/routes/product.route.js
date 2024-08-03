"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const auth_1 = require("../middleware/auth");
exports.ProductRouter = (0, express_1.Router)();
exports.ProductRouter.get("/", auth_1.requireAdmin, product_controller_1.getProduct);
exports.ProductRouter.get("/:id", product_controller_1.getProduct);
exports.ProductRouter.post("/", product_controller_1.createProduct);
exports.ProductRouter.put("/:id", product_controller_1.updateProduct);
exports.ProductRouter.delete("/:id", product_controller_1.deleteProduct);
//# sourceMappingURL=product.route.js.map