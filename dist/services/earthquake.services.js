"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const baseUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson";
function queryEarthquakes(query) {
    const url = `${baseUrl}&${new URLSearchParams(query)}`;
    return node_fetch_1.default(url, { headers: { Accept: "application/json" } }).then((response) => response.json());
}
exports.queryEarthquakes = queryEarthquakes;
//# sourceMappingURL=earthquake.services.js.map