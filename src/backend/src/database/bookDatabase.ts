import { Document } from "mongoose";
/* Em construção */

export interface Book extends Document {
    nome:       string;
    ISBN:       number;
    autor:      string;
    /* adicionar demais atributos */
}

    /**
     * Função de inserção do Livro no banco de dados
     * @param nome      Nome do Livro
     * @param ISBN      Número do ISBN do Livro
     * @param autor     Autor do Livro
     * @returns         Bufer contendo o livro
     */
     async function inserirLivrosssss(nome: string, ISBN: number, autor: string) {
        try {
            //const livro = new LivroModel({ nome, ISBN, autor });
            //const livroSalvo = await livro.save();
            //console.log('Livro inserido com sucesso:', livroSalvo);
            //return livroSalvo;
        } 
        
        catch (error) {
            console.error('Erro ao inserir Livro:', error);
            throw error;
        }
    }

     async function buscarPorNome() {
        /*
        try {
          const campo1 = "Francisco";
          const campo2 = 23
          const dado = await ExemploModel.find({ campo1,campo2 });
      
          if (dado) {
            console.log('Dado encontrado:', dado);
            return dado;
          } else {
            console.log('Dado não encontrado');
            return null;
          }
        } catch (error) {
          console.error('Erro ao buscar dado:', error);
          throw error;
        } finally {
          // Fechar a conexão ao final da busca
          await mongoose.disconnect();
          console.log('Conexão com o MongoDB fechada');
        }
        */
    }