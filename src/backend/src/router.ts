import multer, { Multer } from 'multer';
import fs from 'fs';

import { Router, Response, Request } from 'express';
import { keywordGetController, keywordPostController, keywordDeleteController, keywordPutController } from './controllers/keywordCT';
import { rootPostController, rootGetController, rootDeleteController } from './controllers/rootCT';
import RootReturn from './database/models/rootReturnMD';
import signupController from './controllers/signupCT';
import signinController from './controllers/signinCT';

class Routes {
    private router: Router;
    private upload: Multer;

    private constructor () {
        this.router = Router();
        this.startRoutes();
        this.upload = multer({dest: 'uploads/'});
    }

    public static create (): Routes {
        return new Routes();
    }

    public getRouter (): Router {
        return this.router;
    }

    private startRoutes ():void {
        this.router.get("/", this.rootGet);
        this.router.post("/", this.rootPost);
        this.router.delete("/", this.rootDelete);


        this.router.post("/signin", this.signIn);

        this.router.post("/signup", this.signUp);

        this.router.post("/keyword", this.keywordPost);
        this.router.get("/keyword", this.keywordGet);
        this.router.delete("/keyword", this.keywordDelete);
        this.router.put("/keyword", this.keywordPut);
    } 

    /* --------------------- MÉTODOS DA ROTA "/" --------------------- */

    private async rootGet (req: Request, res: Response): Promise<void> {
        const response =  await rootGetController();
        
        if (response) {
            //console.log("Modelo da resposta enviada: ", response[0]);
            res.json(response);
        }

        else {
            res.status(400).json({msg:"error"});
        }
    }

    private async rootPost (req: Request, res: Response): Promise<void> {
        const {title, keyword, author, description} = req.body;
        const response: boolean = await rootPostController(title, keyword, author, description);
            
        if (response) {
            console.log("Livro inserido com sucesso!");
            res.json("OK");
        }
            
        else {
            res.status(400).send("Erro de inserção");
        }
    }

    private async rootDelete (req: Request, res: Response): Promise<void> {
        const {title} = req.body;

        if (await rootDeleteController(title)) {
            res.json({msg:"OK"});
        }

        else {
            res.status(400).json({msg:"Falha ao deletar"});
        }
    }

    /* --------------------- MÉTODO DA ROTA "/signin" --------------------- */

    private async signIn (req:Request, res:Response): Promise<void> {
        const {email,password} = req.body;
        
        if (!email || !password) {
            res.status(400).json({msg:"Dados incompletos"});
        }

        else {
            const {name,token} = await signinController(email,password);

            if (!name || !token) {
                res.status(400).json({msg:"Erro"});
            }

            else {
                res.status(200).json({name,token});
            }
        }
        
    }

    /* --------------------- MÉTODO DA ROTA "/signup" --------------------- */

    private async signUp (req:Request, res:Response): Promise<void> {
        const {name,email,password} = req.body;

        if (!name || !email || !password) {
            res.status(400).json({msg:" Dados incompletos!"});
        }
        
        else {
            if (await signupController(name,email,password)) {
                res.status(200).json({msg: "usuario cadastrado com sucesso!"});
            }

            else {
                res.status(401).json({msg: "Ocorreu um erro no servidor!"});
            }
        }
    }

    /* --------------------- MÉTODOs DA ROTA "/keyword" --------------------- */

    private async keywordGet (req: Request, res: Response): Promise<void> {
        const substring = req.query.substring as string;
        const data: [string[],string[]] = await keywordGetController(substring);
        
        if (data[0].length > 0) {
            res.json({keywords:data[0], colors: data[1]});
        }

        else {
            res.status(400).send("Dados não encontrados");
        }
    }

    private async keywordPost (req: Request, res: Response): Promise<void> {
        const {keyword, color} = req.body;
        const data: boolean = await keywordPostController(keyword,color);

        if (data) {
            res.status(200).send("Inserção realizada com sucesso!");
        }

        else {
            res.status(400).json({error: "Não foi possível inserir"});
        }
    }

    private async keywordDelete (req: Request, res: Response): Promise<void> {
        const {keyword} = req.body;
        
        if (await keywordDeleteController(keyword)) {
            res.json("Palavra deletada com sucesso!")
        }

        else {
            res.status(400).json("Erro ao deletar");
        }
    }

    private async keywordPut (req: Request, res: Response): Promise<void> {
        const oldKeyword = req.query.substring as string;
        const newKeyword = req.body.keyword;
        
        if (await keywordPutController(oldKeyword,newKeyword)) {
            res.json({msg:"ok"});
        }

        else {
            res.status(400).json({msg:"Erro ao atualizar"});
        }
    }
}

const routers = Routes.create().getRouter();

export {routers};