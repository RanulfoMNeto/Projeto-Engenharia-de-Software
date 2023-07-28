import bcrypt from 'bcrypt';
import { saveUser } from '../database/userDB';

export default async function signupController (name: string, email:string, password: string, ): Promise<boolean> {
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password,salt);

    if (await saveUser(name,passwordHash,email)) {
        return true;
    }

    else {
        return false;
    }
}