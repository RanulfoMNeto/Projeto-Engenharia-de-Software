import { deleteKeyword, findKeyword, saveKeyword } from "../database/keywordDB";

export function keywordGetController (substring?: string): Promise<[string[],string[]]> {   
    return findKeyword(substring);
}

export function keywordPostController (keyword: string, color: string): Promise<boolean> {
    return saveKeyword(keyword,color);
}

export function keywordDeleteController (text: string): Promise<boolean> {
    return deleteKeyword(text);
}