import fetch from "node-fetch";

const baseUrl: string = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson";

export function queryEarthquakes(query: Record<string, string>) {
  const url = `${baseUrl}&${new URLSearchParams(query)}`;

  return fetch(url, { Headers: { Accept: "application/json" } }).then((response) => response.json());
}
