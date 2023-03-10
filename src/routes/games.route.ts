import { Router } from "express";
import { deleteGame, getGames, getPlaytimeAverage, insertGame, patchGame } from "../controllers/games.controller.js";
import { validateBody } from "../middlewares/bodyValidation.middleware.js";
import { gameSchema, playtimeSchema } from "../schemas/game.schema.js";

const gamesRouter = Router();

gamesRouter.post("/games", validateBody(gameSchema), insertGame);
gamesRouter.get("/games", getGames);
gamesRouter.patch("/games/:id", validateBody(playtimeSchema), patchGame);
gamesRouter.delete("/games/:id", deleteGame);
gamesRouter.get("/games/playtime-avg", getPlaytimeAverage);

export default gamesRouter;
