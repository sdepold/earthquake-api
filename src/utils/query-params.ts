import { Request } from "express";

export function requestToParams(req: Request) {
  const params = { ...req.query };

  if (req.params.id) {
    params.eventid = req.params.id;
  }

  if (!params.endtime) {
    const now = new Date();
    params.endtime = now.toISOString().split("T")[0];
  }

  if (!params.starttime) {
    const time = new Date(params.endtime);
    time.setDate(time.getDate() - 1);

    params.starttime = time.toISOString().split("T")[0];
  }

  return params;
}
