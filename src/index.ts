import express, { Application } from "express";
import { routes } from "./routes";
import { logger } from "./utils/logger";
import cors from "cors";

// Connect DB
import "./utils/connectDB";

import deserializedToken from "./middleware/deserialized";

const app: Application = express();
// eslint-disable-next-line @typescript-eslint/ban-types
const port: Number = 3000;

app.use(express.json());

app.use(cors());
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "*");
	res.setHeader("Access-Control-Allow-Headers", "*");
	next();
});

app.use(deserializedToken);

routes(app);

app.listen(port, () => logger.info(`Listening on port ${port}`));
