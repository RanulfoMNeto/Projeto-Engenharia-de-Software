import { mongooseConnect, mongooseDisconnect } from "./configDB";
import { KeyModel } from "./models/keywordMD";

export async function saveKeyword (keyword: string, color: string): Promise<boolean> {
    try {
        const key = new KeyModel ({keyword, color});
        const response = await key.save();
        console.log("Palavra Chave cadastrada com sucesso!");
        return true;
    }
    
    catch (error) {
        console.log("Erro ao cadastrar palavra chave: ", error);;
        return false;
    }
}

export async function findKeyword (substring?: string): Promise<[string[],string[]]> {
    let keywords: string[] = [];
    let colors: string[] = [];
    try {
        const data = await KeyModel.find({ keyword: { $regex: substring, $options: "i" } });
        const keywordMap = data.map(doc => doc.keyword);
        const colorMap = data.map(doc=>doc.color)

        keywords.push(...keywordMap);
        colors.push(...colorMap);

        console.log(keywordMap);
        return [keywords,colors];
    }

    catch (error) {
        console.log("Erro ao recuperar palavras chave", error);
        return [[],[]];
    }
}

export async function deleteKeyword (keyword: string): Promise<boolean> {
    try {
        const response = await KeyModel.deleteOne({keyword});
        if (response.deletedCount === 0) {
            console.log("Nao foi encontrado a chave!");

            return false;
        }

        else if (response.deletedCount > 0) {

            return true;
        }

        else {

            throw("Erro ao deletar");
        }
    }

    catch (error) {
        console.log("Erro ao recuperar palavras chave");
        return false;
    }
}