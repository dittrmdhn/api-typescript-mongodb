"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const logger_1 = require("./utils/logger");
const cors_1 = __importDefault(require("cors"));
// Connect DB
require("./utils/connectDB");
const deserialized_1 = __importDefault(require("./middleware/deserialized"));
const app = (0, express_1.default)();
// eslint-disable-next-line @typescript-eslint/ban-types
const port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});
app.use(deserialized_1.default);
(0, routes_1.routes)(app);
app.listen(port, () => logger_1.logger.info(`Listening on port ${port}`));
//# sourceMappingURL=index.js.map