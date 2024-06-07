"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const earthquake_services_1 = require("../services/earthquake.services");
const query_params_1 = require("../utils/query-params");
const time_1 = require("../utils/time");
const router = express_1.Router();
exports.router = router;
router.get("/earthquakes", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const result = yield earthquake_services_1.queryEarthquakes(query_params_1.requestToParams(req));
    const delay = req.query.delay ? Number(req.query.delay) : 25;
    yield time_1.wait(result.metadata.count * delay);
    res.json(result);
}));
router.get("/earthquakes/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const result = yield earthquake_services_1.queryEarthquakes(query_params_1.requestToParams(req));
    res.json(result);
}));
