import { Request, Response, Router } from "express";
import { queryEarthquakes } from "../services/earthquake.services";
import { requestToParams } from "../utils/query-params";
import { wait } from "../utils/time";

const router = Router();

router.get("/earthquakes", async (req: Request, res: Response) => {
  const result = await queryEarthquakes(requestToParams(req));
  const delay = req.query.delay ? Number(req.query.delay) : 25;

  await wait(result.metadata.count * delay);
  res.json(result);
});

router.get("/earthquakes/:id", async (req: Request, res: Response) => {
  const result = await queryEarthquakes(requestToParams(req));

  res.json(result);
});

export { router };
