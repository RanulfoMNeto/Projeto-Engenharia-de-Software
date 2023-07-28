import { UserModel } from "./models/userMD";

export async function saveUser (name: string, password:string, email:string) {
    try {
        const userExist = await UserModel.findOne({email});

        if (!userExist) {
            const user = new UserModel ({name, password, email});
            await user.save();
            console.log("Usuario cadastrado com sucesso!");
            return true;
        }

        else {
            console.log("usuário já cadastrado!");
            return false;
        }
    }
    
    catch (error) {
        console.log("Erro ao cadastrar usuário: ", error);;
        return false;
    }
}

export async function findUser (email:string) {
    try {
        const user = UserModel.findOne({email});
        return user
    }

    catch (error) {
        console.log("Erro",error);
        return null;
    }
}