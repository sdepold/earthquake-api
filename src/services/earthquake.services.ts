import { Response } from "express";
import fetch from "node-fetch";
import { ApiResponse } from "../models/api";

const baseUrl: string =
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson";

export function queryEarthquakes(
  query: Record<string, string>
): Promise<ApiResponse> {
  const url = `${baseUrl}&${new URLSearchParams(query)}`;

  return fetch(url, { headers: { Accept: "application/json" } }).then(
    (response: Response) => response.json()
  );
}
