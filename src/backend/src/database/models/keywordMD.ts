import mongoose , { Document, Model } from "mongoose"

export interface Keyword extends Document {
    keyword:   string;
    color:  string;
}

export const KeyModel: Model<Keyword> = mongoose.model<Keyword>("keyword", new mongoose.Schema({
    keyword: {type: String},
    color: {type: String}
}));