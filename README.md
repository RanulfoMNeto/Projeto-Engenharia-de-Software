# Alexandria

O Alexandria é uma solução abrangente e poderosa para o gerenciamento e compartilhamento de documentos digitais. Com sua interface intuitiva, recursos avançados de busca e capacidade de categorização, ele oferece uma maneira eficiente de organizar, acessar e compartilhar uma vasta gama de materiais, tornando-se uma ferramenta valiosa para estudantes, pesquisadores e entusiastas da leitura.

### Funcionalidades

- Usuário:
    cadastrar(email/username, senha)

- Gerenciar Documentos
    cadastrar()


```mermaid
    classDiagram
        Documento <|-- Livro
        Documento <|-- Artigo
        Documento <|-- Revista
        class Documento {
            - id: int
            - title: String
            - author: String
            - keywords: HashMap~Keyword~
        }
        class Livro {
            - ISBN: String
            - edition: int
            - description: String
        }
        class Artigo {
            - DOI: String
            - abstract: String
        }
        class Revista {
            - ISSN: String
            - volume: int
            - about: String
        }

```