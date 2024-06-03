"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const config_1 = __importDefault(require("./config/config"));
const routes_1 = __importDefault(require("./routes"));
const port = process.env.PORT || config_1.default.port || 3000;
const app = new App_1.default(routes_1.default).express;
app.listen(port, () => {
    console.log(`API is listening on http://localhost:${port}`);
});
