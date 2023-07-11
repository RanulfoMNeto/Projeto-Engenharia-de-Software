import express from "express";
import { routers } from "./router";
const cors = require("cors");

export class App {
    public server: express.Application;
    
    public constructor () {
        this.server = express();
        this.middleware();
        this.router();
    }

    private middleware () {
        this.server.use(express.json());
        this.server.use(cors());
    }

    public router () {
        this.server.use(routers);
    }
}