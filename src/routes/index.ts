import { Request, Response, Router } from "express";
import fs from "fs";
import path from "path";

const router: Router = Router();
const normalizedPath: string = path.join(__dirname);

fs.readdirSync(normalizedPath).forEach((file) => {
  if (file.includes(".routes.") && !file.includes("index.")) {
    router.use("/", require(`./${file}`).router);
  }
});

router.get('/', (_req: Request, res: Response) => {
  return res.send('Hello World');
});

export default router;
