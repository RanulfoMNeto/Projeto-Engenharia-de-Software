<div align="center">  
    <h1>Alexandria</h1>
    <img src="https://github.com/RanulfoMNeto/Projeto-Engenharia-de-Software/assets/78691159/a61979ca-e7a1-4bdb-9ca7-996f5d698b7c" alt="Símbolo de Alexandria" width="150" height="150">
    <p>
        O Alexandria é uma solução abrangente e poderosa para o gerenciamento e compartilhamento de documentos digitais. Com sua interface intuitiva, recursos avançados de busca e capacidade de categorização, ele oferece uma maneira eficiente de organizar, acessar e compartilhar uma vasta gama de materiais, tornando-se uma ferramenta valiosa para estudantes, pesquisadores e entusiastas da leitura.
    </p>
</div>

- **Integrantes**: [Ranulfo Mascari Neto](https://github.com/RanulfoMNeto), [Heitor Rodrigues Sabino](https://github.com/s4bino) e [Francisco Afonso de Oliveira Neto](https://github.com/franawp).


## Funcionalidades

- **Usuário**:
    - cadastrar(email/username, senha)
    - login(email/username, senha)
    - editar(Usuário)
    - deletar(Usuário)

- **Gerenciar Palavra-chave**:
    - cadastrar(...)
    - visualizar(Palavra-chave)
    - editar(Palavra-chave)
    - deletar(Palavra-chave)
    
- **Gerenciar Documento**:
    - cadastrar(..., Palavras-chave)
    - visualizar(Documento)
    - editar(Documento)
    - deletar(Documento)

## Usuários Previstos
- **Leitor**(sem cadastro);
- **Usuário**.


## Tecnologias Utilizadas

- **Back-end**:
    - Typescript: v5.1.6
    - Node: v20.3.1
    - Express: v4.18.2
    - Banco de Dados
        - MongoDB: v6.0.7

- **Front-end**:
    - HTML5
    - CSS3
    - JavaScript
    - Typescript: v5.1.6
    - Next: v13.4.9
    - React: v18.2.0
    - Bootstrap: v5.3

## Regras de Uso

### Definição de Pastas

- **docs**:
    - O diretório `docs` (abreviação de "documents") é onde a documentação do software é armazenado. É nele que você encontrará detalhes sobre o processo de levantamento de requisitos, requisitos funcionais e não funcionais, padrões adotados, etc.
        - Diagramas: O diretório `diagramas` é onde os diagramas do sistema são armazenados, sendo eles os Diagrama de Classes do domínio com relacionamentos e multiplicidade, Diagrama de Pacotes, Diagrama de Sequência e Diagrama de Implantação.
        - Padrões Adotados: O diretório `Padrões Adotados` possui as Regras de Verificação e Analise de Requisitos.
        - Requisitos: O diretório `Requisitos` apresenta o Documento de Requisitos, Casos de Uso, Prototipação e etc. 

- **src**:
    - O diretório `src` (abreviação de "source") é onde o código-fonte principal do software é armazenado. É nele que você encontrará os arquivos que contêm a lógica e a funcionalidade do software.

### Regras de Commit

- **Escreva mensagens de commit claras e concisas**:
    - Utilize verbos no imperativo para descrever as alterações realizadas.
    - Evite mensagens genéricas como "Correções" ou "Atualizações".

- **Commits atômicos e granulares**:
    - Realize commits pequenos e focados, que representem uma única alteração ou conjunto lógico de alterações.
    - Evite commits muito grandes ou com alterações misturadas, pois dificultam a revisão e o entendimento das modificações realizadas.

- **Faça commits frequentes e regulares**:
    - Commits frequentes ajudam a manter um histórico claro das alterações e facilitam a resolução de problemas.
    - Não deixe grandes períodos de tempo passarem sem realizar commits, para evitar a perda de trabalho e dificuldades na mesclagem de alterações.

- **Padrão Utilizado**:
    - `Issue #{código}: {descrição}`

### Uso de Branches

- **Evite trabalhar diretamente na branch principal**.

- **Mantenha as branches atualizadas com o branch principal**:
    - Antes de iniciar o trabalho em uma branch, faça o pull das últimas alterações do branch principal para evitar conflitos desnecessários.

- **Faça o merge das branches após a conclusão da funcionalidade ou tarefa**:
    - Evite fazer merges diretos na branch principal.
