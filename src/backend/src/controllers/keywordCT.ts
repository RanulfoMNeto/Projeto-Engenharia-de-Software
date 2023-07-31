import { deleteKeyword, findKeyword, saveKeyword, putKeyword } from "../database/keywordDB";

export function keywordGetController (substring?: string): Promise<[string[],string[]]> {   
    return findKeyword(substring);
}

export function keywordPostController (keyword: string, color: string): Promise<boolean> {
    return saveKeyword(keyword,color);
}

export function keywordDeleteController (keyword: string): Promise<boolean> {
    return deleteKeyword(keyword);
}

export function keywordPutController (oldKeyword: string, newKeyword: String): Promise<boolean> {
    return putKeyword(oldKeyword,newKeyword);
}