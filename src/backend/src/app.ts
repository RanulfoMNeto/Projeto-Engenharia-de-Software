import express from "express";
import { routers } from "./router";
import { mongooseConnect } from "./database/configDB";
import cors from "cors";

export class App {
    public server: express.Application;
    
    public constructor () {
        this.server = express();
        this.middleware();
        this.router();
        this.database();
    }

    private middleware () {
        this.server.use(express.json());
        this.server.use(cors());
    }

    public router () {
        this.server.use(routers);
    }

    public database () {
        mongooseConnect();
    }
}