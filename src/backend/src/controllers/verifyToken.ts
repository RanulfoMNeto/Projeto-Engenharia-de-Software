import jwt from "jsonwebtoken";

/** 
 * Função de verificação de token 
 * 
 * @param token     token gerador anteriormente
 * @returns         Json que representa o payload original incluido no token
 */
export function verifyToken(token: string) {
    const secretKey = "alexandria";
    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (error) {
        console.log("Erro ao verificar o token:", error);
        return null;
    }
}