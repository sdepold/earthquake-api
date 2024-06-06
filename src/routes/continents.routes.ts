import { Request, Response, Router } from "express";
import { continents } from "../config/continents";

const router = Router();

router.get("/continents", async (req: Request, res: Response) => {
  res.json(continents);
});

export { router };
