import { Request, Response, Router } from "express";
import { queryEarthquakes } from "../services/earthquake.services";

const router = Router();

router.get("/earthquakes", async (req: Request, res: Response) => {
  const result = await queryEarthquakes(req.query);

  res.json(result);
});

router.get("/earthquakes/:id", async (req: Request, res: Response) => {
  const result = await queryEarthquakes({...req.query, eventid: req.params.id});

  res.json(result);
});

export { router };
