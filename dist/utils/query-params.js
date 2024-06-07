"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const continents_1 = require("../config/continents");
function requestToParams(req) {
    const params = Object.assign({}, req.query);
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
        const bbox = continentToBBox(params.continent);
        params.minlatitude = bbox.minlatitude;
        params.maxlatitude = bbox.maxlatitude;
        params.minlongitude = bbox.minlongitude;
        params.maxlongitude = bbox.maxlongitude;
        delete params.continent;
    }
    delete params.delay;
    return params;
}
exports.requestToParams = requestToParams;
function continentToBBox(continent) {
    const continentConfig = continents_1.continents.find((c) => c.slug === continent);
    if (continentConfig) {
        return continentConfig.bbox;
    }
    return null;
}
exports.continentToBBox = continentToBBox;
