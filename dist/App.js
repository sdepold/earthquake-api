"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
class App {
    constructor(router) {
        this.express = express_1.default();
        this.config();
        this.express.use(router);
    }
    config() {
        // Body parser to parse JSON and form-urlencoded payloads
        this.express.use(body_parser_1.default.json());
        this.express.use(body_parser_1.default.urlencoded({ extended: false }));
        // Pretty print for JSON repsonses
        this.express.set("json spaces", 4);
        // Logger for requests
        this.express.use(morgan_1.default("common"));
        // CORS middleware
        this.express.use(cors_1.default());
        // Gzip compression of responses
        this.express.use(compression_1.default());
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map