import mongoose, {Model, Document} from 'mongoose';
import * as Usuario from './userDatabase';
import * as Livro from './bookDatabase';

/**
 * Classe com as chamadas de métodos de manipulação no banco de dados
 */
class Database {
    private MONGODB_URI: string;

    public constructor() {
        this.MONGODB_URI = 'mongodb://localhost:27017/alexandria-db';
        this.mongooseConnect();
    }

    /**
     * Função para realizar a conexão com o Banco de Dados
     */
    private mongooseConnect ():void {
        mongoose.connect(this.MONGODB_URI)
            .then(() => {
                console.log('Conexão estabelecida com o MongoDB');
            })
            .catch((error) => {
                console.error('Erro ao conectar ao MongoDB:', error);
            });
    }

    /**
     * Função para realizar a desconexão com o Banco de Dados
     */
    private mongooseDisconnect ():void {
        mongoose.disconnect()
            .then(() => {
                console.log('Conexão com o MongoDB fechada');
            })
            .catch((error) => {
                console.error('Erro ao fechar conexão com o MongoDB:', error);
            });
    }

    /**
     * Funcao para cadastrar o Livro no Banco de Dados
     * 
     * @param nome      nome do Livro
     * @param ISBN      ISBN do Livro
     * @param autor     autor do Livro
     * @returns         Reposta sobre a inserção
     */
    public async inserirLivro (nome: string, ISBN: number, autor: string): Promise<boolean> {
        /* Em desenvolvimento */
        return true;
    }

    /**
     * Funcao para cadastrar o usuário 
     * 
     * @param name      nome do Usuário
     * @param email     email do usuário
     * @param password  senha do usuário
     * @param root      privilégios do usuário
     * @returns         Resposta da inserção (true or false)
     */
    public async cadastrarUsuario (name: string, email: string, password: string, root: boolean): Promise<boolean> {
        return Usuario.sigupUser(name, email, password, root);
    }

    /**
     * Funcao para logar o usuário
     * 
     * @param email     email do Usuário
     * @param password  senha do Usuário
     * @returns         nome do Usuário ou mensagem de erro
     */
    public async logarUsuario (email: string, password: string) {
        const response: Usuario.SiginResponse = await Usuario.siginUser(email,password);
        const usuarioLogado: boolean = (!!response.user && !response.notPassword && !response.notFind && !response.error) ;
        const incorrectPassword: boolean = response.notPassword;

        if (usuarioLogado) {
            if (response.user) {
                return response.user.name;
            }

            else {
                return "Unknow";
            }
        }

        else if (!usuarioLogado && incorrectPassword) {
            return "password";
        }

        else {
            return "not found";
        }
    }

    /**
     * Funcao para buscar um Livro
     * Parâmetros opcionais, pois pode ser usado o nome ou o ISBN para fazer a busca
     * 
     * @param nome      nome do Livro
     * @param ISBN      ISBN do Livro
     */
    public async buscarLivro (nome?: string, ISBN?: number): Promise<void | Livro.Book> {
        if (nome) {
            /* retorno do livro pelo nome */
        }

        else if (ISBN) {
            /* Retornar livro pelo ISBN */
        }

        else {
            console.log ("Nenhum parametro passado");
        }
    }
}

export default new Database();