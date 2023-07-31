import { findKeyword } from "./keywordDB";
import { BookModel } from "./models/bookMD";

export async function saveBook (title: string, keyword: string[], author: string, description: string): Promise<boolean> {
    try {
        const book = new BookModel ({title, keyword, author, description});
        await book.save();
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
        const data = await BookModel.find();
        const vectorResponse: any[] = [];

        for (const book of data) {
            const { title, keyword, author, description } = book;
            let keywordVector: any[] = [];

            keywordVector = await Promise.all(keyword.map(findKeyword));
            
            vectorResponse.push({ title, keyword: keywordVector, author, description });
        }

        return vectorResponse;
    }
    catch (error) {
        console.error("Erro ao recuperar livros", error);
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