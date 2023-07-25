import mongoose from "mongoose";

const MONGODB_URI = 'mongodb://127.0.0.1:27017/alexandria-db';

export function mongooseConnect ():void {
    mongoose.connect(MONGODB_URI)
        .then(() => {
            console.log('Conexão estabelecida com o MongoDB');
        })
        .catch((error) => {
            console.error('Erro ao conectar ao MongoDB:', error);
        });
}

export function mongooseDisconnect ():void {
    mongoose.disconnect()
        .then(() => {
            console.log('Conexão com o MongoDB fechada');
        })
        .catch((error) => {
            console.error('Erro ao fechar conexão com o MongoDB:', error);
        });
}