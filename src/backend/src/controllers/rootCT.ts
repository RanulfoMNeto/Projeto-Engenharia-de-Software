import { saveBook, findBook, deleteBook } from "../database/bookDB";

export function rootGetController () {   
    return findBook();
}

export function rootPostController (title: string, keyword: string[], author: string, description: string): Promise<boolean> {
    return saveBook(title, keyword, author , description);
}

export function rootDeleteController (title: string): Promise<boolean> {
    return deleteBook(title);
}