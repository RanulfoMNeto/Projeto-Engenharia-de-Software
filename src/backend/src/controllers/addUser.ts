import Database from "../database/database";
import jwt from "jsonwebtoken";

export default async function addUser (name: string, email:string, password:string) {
    /* adicionar verificação de super usuário */
    const secretKey = "alexandria";

    if (await Database.cadastrarUsuario(name, email, password, false)) {
        return jwt.sign({name: name}, secretKey);
    }

    else {
        return "Error";
    }
}