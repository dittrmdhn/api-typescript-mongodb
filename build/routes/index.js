"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const product_route_1 = require("./product.route");
const auth_route_1 = require("./auth.route");
const _routes = [
    ["/product", product_route_1.ProductRouter],
    ["/auth", auth_route_1.AuthRouter],
];
const routes = (app) => {
    _routes.forEach((route) => {
        const [url, router] = route;
        app.use(url, router);
    });
};
exports.routes = routes;
//# sourceMappingURL=index.js.map