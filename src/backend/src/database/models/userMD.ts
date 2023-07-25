import mongoose , { Document, Model } from "mongoose"

export interface User extends Document {
    name:       string;
    email:      string;
    password:   string;
    root:       boolean;
}

export const UserModel: Model<User> = mongoose.model<User>("users", new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    root: {type: Boolean}
}));