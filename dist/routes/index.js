"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const router = express_1.Router();
const normalizedPath = path.join(__dirname);
fs.readdirSync(normalizedPath).forEach((file) => {
    if (file.includes(".routes.") && !file.includes("index.")) {
        router.use("/", require(`./${file}`).router);
    }
});
exports.default = router;
//# sourceMappingURL=index.js.map