import { Router, Request, Response } from "express";
import { queryEarthquakes } from "../services/earthquake.services";

const router = Router();

router.get("/earthquakes", async (req: Request, res: Response) => {
  const result = await queryEarthquakes(req.query);

  res.json(result);
});

export { router };
