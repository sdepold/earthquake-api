import { Response } from "express";
import fetch from "node-fetch";

const baseUrl: string = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson";

export function queryEarthquakes(query: Record<string, string>) {
  const url = `${baseUrl}&${new URLSearchParams(query)}`;

  return fetch(url, { headers: { Accept: "application/json" } }).then((response: Response) => response.json());
}
