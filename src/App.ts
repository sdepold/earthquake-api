import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import logger from "morgan";

class App {
    public express: express.Application;

    constructor(router: express.Router) {
        this.express = express();
        this.config();
        this.express.use(router);
    }

    private config(): void {
        // Body parser to parse JSON and form-urlencoded payloads
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        // Pretty print for JSON repsonses
        this.express.set("json spaces", 4);
        // Logger for requests
        this.express.use(logger("common"));
        // CORS middleware
        this.express.use(cors());
        // Gzip compression of responses
        this.express.use(compression());
    }
}

export default App;
