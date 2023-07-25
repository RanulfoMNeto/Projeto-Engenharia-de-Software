import { findKeyword } from "./keywordDB";
import { BookModel } from "./models/bookMD";
import RootReturn from "./models/rootReturnMD";

export async function saveBook (title: string, keyword: string, author: string, description: string): Promise<boolean> {
    try {
        const book = new BookModel ({title, keyword, author, description});
        const response = await book.save();
        console.log("Livro cadastrado com sucesso!");
        return true;
    }
    
    catch (error) {
        console.log("Erro ao cadastrar Livro: ", error);;
        return false;
    }
}

export async function findBook () {
    try {
        const vectorResponse: RootReturn[] = [];

        let response: RootReturn = {
            title: "",
            author: "",
            description: "",
            keyword:[[],[]]
        }

        const data = await BookModel.find();

        const vectorTitle = [...data.map(doc => doc.title)];
        const vectorAuthor = [...data.map(doc => doc.author)];
        const vectorDescription = [...data.map(doc => doc.description)];
        const vectorKeyword = [...data.map(doc => doc.keyword)];

        for (let i=0; i<vectorTitle.length; i++) {
            response.title = vectorTitle[i];
            response.author = vectorAuthor[i];
            response.description = vectorDescription[i];

            let keys: string[] = [];
            let colors: string [] = [];
            
            for (let j=0; j<vectorKeyword[i].length; i++) {
                let resp = await findKeyword(vectorKeyword[i][j]);
                keys = resp[0];
                colors = resp[1];
            }
            
            response.keyword = [keys,colors];
        }
        

        console.log(data);
        return data;
    }

    catch (error) {
        console.log("Erro ao recuperar palavras chave", error);
    }
}

export async function deleteBook (title: string): Promise<boolean> {
    try {
        const response = await BookModel.deleteOne({title});
        if (response.deletedCount === 0) {
            console.log("Nao foi encontrado o Livro");

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
        console.log("Erro ao deletar Livro");
        return false;
    }
}