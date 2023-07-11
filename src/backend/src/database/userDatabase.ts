import mongoose , { Document, Model } from "mongoose"

/**
 * Interface contendo os atributos de um usuário
 */
export interface User extends Document {
    name:       string;
    email:      string;
    password:   string;
    root:       boolean;
}

/**
 * Objeto de retorno para a função de logar
 */
export interface SiginResponse {
    user:       null | User,
    notPassword:boolean,
    notFind:    boolean,
    error:      any
}

/**
 * Modelo do mongoDB para mapear um usuário
 */
const UserModel: Model<User> = mongoose.model<User>("users", new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    root: {type: Boolean}
}));

const secretKey = "alexandria";

/**
 * Função assíncrona para cadastrar usuário no Banco de Dados
 * 
 * @param name      Nome do novo usuário
 * @param email     Email do novo usuário
 * @param password  Senha do novo usuário
 * @param root      Permissão do novo usuário
 * @returns         Usuário cadastrado ou não
 */
export async function sigupUser (name: string, email: string, password: string, root: boolean): Promise<boolean> {
    try {
        const user = new UserModel({ name, email, password, root });
        const saveUser = await user.save();
        console.log('Usuário cadastrado com sucesso:', saveUser);
        return true;
    } 
    
    catch (error) {
        console.log('Erro ao cadastrar usuário:', error);
        return false;
    }
}

/**
 * 
 * @param email     Email do usuário
 * @param password  Senha do usuário
 * @returns         Dados do usuário ou uma mensagem de erro
 */
export async function siginUser (email: string, password: string): Promise<SiginResponse> {
    let document: SiginResponse = {
        "user": null,
        "notPassword": false,
        "notFind": false,
        "error": ""
    };

    try {
        const user = await UserModel.findOne({email});
        
        if (!user) {
            document.notFind = true;
            return document;
        }
        
        else {
            if (user["password"] == password) {
                document.user = user;
                return document;
            }

            else {
                document.notPassword = true;
                return document;
            }
        }
    }
    
    catch (error) {
        console.log("Erro ao buscar usuário:", error);
        document.error = error;
        return document;
    }
}


/**
 * Função para verificar se um usuário é um administrador ou não
 * 
 * @param email     email do usuário
 * @returns         usuário administrador ou não
 */
export async function checkrootUser (email: string): Promise<boolean> {
    try {
        const check = await UserModel.findOne({email});
        if(check) {
            if (check.root) {
                return true;
            }

            else {
                return false;
            }
        }
        
        else {
            throw "Usuário não encontrado";
        }
    }

    catch (error) {
        console.log("Ocorreu um erro ao tentar a consulta:", error);
        return false;
    }
}