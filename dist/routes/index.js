"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = require("fs");
const path_1 = require("path");
const router = express_1.Router();
const normalizedPath = path_1.join(__dirname);
fs_1.readdirSync(normalizedPath).forEach((file) => {
    if (file.includes(".routes.") && !file.includes("index.")) {
        router.use("/", require(`./${file}`).router);
    }
});
router.get('/', (_req, res) => {
    return res.send('Hello World');
});
exports.default = router;
