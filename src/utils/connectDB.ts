import mongoose from "mongoose";
import config from "../config/environment";
import { logger } from "./logger";

mongoose
	.connect(`${config.db}`)
	.then(() => {
		logger.info("Database connected");
	})
	.catch((err) => {
		logger.error(err);
		logger.info("could not connect to database");
		process.exit(1);
	});
