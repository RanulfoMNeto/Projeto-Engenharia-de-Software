import mongoose, { Document, Model } from "mongoose";

export interface Book extends Document {
    title:      string;
    keyword:    string[];
    author:     string;
    description:string;
}

export const BookModel: Model<Book> = mongoose.model<Book>("book", new mongoose.Schema({
    title: {type: String},
    keyword: {type: [String]},
    author: {type: String},
    description:{type: String},
}));