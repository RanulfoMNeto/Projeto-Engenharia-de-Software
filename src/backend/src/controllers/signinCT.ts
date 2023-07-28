import jwt from "jsonwebtoken";
import { findUser } from "../database/userDB";
import bcrypt from 'bcrypt';

export default async function signinController (email:string, password:string) {
    const secretKey = "alexandria";
    const user = await findUser(email);

    if (user) {
        if (await bcrypt.compare(password,user.password)) {
            const token = jwt.sign(email,secretKey);
            
            return {name :user.name, token:token}
        }

        else {
            console.log("Senha inválida!");
        }
    }

    return {name:null, token:null};
}