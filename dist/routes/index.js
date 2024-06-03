"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const router = express_1.Router();
const normalizedPath = path_1.default.join(__dirname);
fs_1.default.readdirSync(normalizedPath).forEach((file) => {
    if (file.includes(".routes.") && !file.includes("index.")) {
        router.use("/", require(`./${file}`).router);
    }
});
router.get('/', (_req, res) => {
    return res.send('Hello World');
});
exports.default = router;
//# sourceMappingURL=index.js.map