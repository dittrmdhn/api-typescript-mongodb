"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const environment_1 = __importDefault(require("../config/environment"));
const logger_1 = require("./logger");
mongoose_1.default
    .connect(`${environment_1.default.db}`)
    .then(() => {
    logger_1.logger.info("Database connected");
})
    .catch((err) => {
    logger_1.logger.error(err);
    logger_1.logger.info("could not connect to database");
    process.exit(1);
});
//# sourceMappingURL=connectDB.js.map