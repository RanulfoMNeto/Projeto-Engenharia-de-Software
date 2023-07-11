import Database from "../database/database"
import jwt from "jsonwebtoken";

export interface Login {
    name:   string;
    token:  string;
    error:  string;
}

export async function logUser (email:string ,password: string): Promise<Login> {
    const privateKey = "alexandria";
    const dados = await Database.logarUsuario(email,password);
    const promisse: Login = {
        "name": "",
        "token": "",
        "error": ""
    };

    if (dados === "password") {
        promisse.error = "senha invalida";
        return (promisse);
    }

    else if (dados === "not found") {
        promisse.error = "usuario nao encontrado";
        return (promisse);
    }

    else { 
        promisse.name = dados;
        promisse.token = jwt.sign({dados},privateKey);
        return promisse;
    }
}