import { Router, Response, Request } from 'express';
import { keywordGetController, keywordPostController, keywordDeleteController } from './controllers/keywordCT';

class Routes {
    private router: Router;

    private constructor () {
        this.router = Router();
        this.startRoutes();
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
    } 

    /* --------------------- MÉTODOS DA ROTA "/" --------------------- */

    private async rootGet (req: Request, res: Response): Promise<void> {

    }

    private async rootPost (req: Request, res: Response): Promise<void> {

    }

    private async rootDelete (req: Request, res: Response): Promise<void> {

    }

    /* --------------------- MÉTODO DA ROTA "/signin" --------------------- */

    private async signIn (req:Request, res:Response): Promise<void> {
        /*
        const {email,password} = req.body;
        const data = await logUser(email,password);
        
        if (data.error != "") {
            res.status(400).json({error: data.error});
        }
        
        else {
            res.json({
                name: data.name, 
                token: data.token
            });
        }
        */
    }

    /* --------------------- MÉTODO DA ROTA "/signup" --------------------- */

    private async signUp (req:Request, res:Response): Promise<void> {
        /*
        const {name,email,password} = req.body;
        const token = await addUser(name,email,password);

        if (token === "Error") {
            res.status(400).json({error:"Falha ao cadastrar"})
        }

        console.log("Token gerado com sucesso:",token)
        res.json(token);
        */
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
}

const routers = Routes.create().getRouter();

export {routers};