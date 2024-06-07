import { Request } from "express";
import { Continent, continents } from "../config/continents";

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

  if (params.continent) {
    const bbox = continentToBBox(params.continent as string);

    params.minlatitude = bbox.minlatitude;
    params.maxlatitude = bbox.maxlatitude;
    params.minlongitude = bbox.minlongitude;
    params.maxlongitude = bbox.maxlongitude;

    delete params.continent;
  }

  delete params.delay;

  return params;
}

type BoundingBox = {
  minlatitude: number;
  minlongitude: number;
  maxlatitude: number;
  maxlongitude: number;
};
export function continentToBBox(continent: string): BoundingBox | null {
  const continentConfig = continents.find(
    (c: Continent) => c.slug === continent
  );

  if (continentConfig) {
    return continentConfig.bbox;
  }

  return null;
}
