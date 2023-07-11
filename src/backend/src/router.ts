import { Router, Response, Request } from 'express';
import Database from './database/database';
import addUser from './controllers/addUser';
import {logUser,Login} from './controllers/logUser';

class Routes {
    private router: Router;

    private constructor () {
        this.router = Router();
        this.inicializarRotas();
    }

    /**
     * Construtor alternativo para evitar herança
     * @returns Instância da classe Routes
     */
    public static create (): Routes {
        return new Routes();
    }

    /**
     * Funcao para retornar o objeto router
     * @returns objeto router
     */
    public getRouter (): Router {
        return this.router;
    }

    /**
     * Método para iniciar as rotas do site
     */
    private inicializarRotas ():void {
        this.router.get("/", this.rootPage);
        this.router.post("/signin", this.signIn);
        this.router.post("/signup", this.signUp);
        this.router.get("/home", this.home);
        this.router.get("/minha-biblioteca", this.minhaBiblioteca);
        this.router.get("/home/download", this.enviarArquivo);
    }

    /**
     * Método para enviar o arquivo PDF ao usuário
     * @param req Requisição
     * @param res Resposta
     */
    private enviarArquivo (req: Request, res: Response):void {
        /*const identificador: number = 10;

        const arquivoPDF = exportarArquivo(identificador);

        if (arquivoPDF == null) {
            res.status(404).send("Arquivo não encontrado!");
        }
        */
        res.send("Fazendo download do Livro");
    }

    /**
     * Método para a rota padrão "/"
     * @param req 
     * @param res 
     */
    private rootPage (req:Request, res:Response) {
        const data = Database;
        //data.insertExemplo();
        //data.buscarPorNome();
        res.send("Seja Welcomido ao site");
    }

    /**
     * Rota para verificar no banco de dados os dados do usuário
     * @param req 
     * @param res 
     */
    private async signIn (req:Request, res:Response): Promise<void> {
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
    }

    /**
     * Rota para inserir no banco de dados, os dados do usuário
     * @param req 
     * @param res 
     */
    private async signUp (req:Request, res:Response): Promise<void> {
        const {name,email,password} = req.body;
        const token = await addUser(name,email,password);

        if (token === "Error") {
            res.status(400).json({error:"Falha ao cadastrar"})
        }

        console.log("Token gerado com sucesso:",token)
        res.json(token);
    }

    /**
     * Rota para exibir a tela inicial do site
     * @param req 
     * @param res 
     */
    private home (req:Request, res:Response) {
        res.send("Seja Bem-Vindo ao site");
    }

    /**
     * Rota para exibir os livros do usuário
     * @param req 
     * @param res 
     */
    private minhaBiblioteca (req:Request, res:Response) {
        res.send("Aqui está seus livros");
    }
}

const routers = Routes.create().getRouter();

export {routers};