import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import discordRoutes from "./routes/discordRoutes";
import smartHomeRoutes from "./routes/smartHomeRoutes";
import redeemRoutes from "./routes/redeemRoutes";
import userRoutes from "./routes/userRoutes";
import { keyMiddleware } from "./middleware/keyMiddleware";
import { KeycloakMiddleware } from "./middleware/tokenMiddleware";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", keyMiddleware, userRoutes);
app.use("/discord", KeycloakMiddleware.authMiddleware, discordRoutes);
app.use("/redeem", keyMiddleware, redeemRoutes);
app.use("/smart", smartHomeRoutes);

export default app;
