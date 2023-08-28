# Projeto de estudo sobre Node.js

## Techs

- Express: framework pra lidar com requisições da aplicação
  --save: vai salvar como uma dependência do meu projeto - dependência de producão
  --save-dev: não ir para deploy em ambiente de prod
- node
- nodemon: restartar o node quando houver atualizações
- express-async-erros: tratamento de excessões
- sqlite3: drive de conexão, estabelecer comunicação com a base de dados
- sqilite: responsável por conecatar
- node path: resolve o path dos arquivos (não precisa instalar, vem junto com o node)
- bcryptjs: encriptografa senhas para inserção no banco 
- knex.js: ORM - query builder

## Estrutura do projeto 
```
├── README.md
├── knexfile.js
├── package-lock.json
├── package.json
└── src
    ├── controllers
    │   ├── NotesController.js
    │   ├── TagsController.js
    │   └── UsersController.js
    ├── database
    │   ├── database.db
    │   ├── knex
    │   │   ├── index.js
    │   │   └── migrations
    │   │       ├── 20230325212555_createNotes.js
    │   │       ├── 20230325221458_createTags.js
    │   │       └── 20230325222022_createLinks.js
    │   └── sqlite
    │       ├── index.js
    │       └── migrations
    │           ├── createUsers.js
    │           └── index.js
    ├── routes
    │   ├── index.js
    │   ├── notes.routes.js
    │   ├── tags.routes.js
    │   └── users.routes.js
    ├── server.js
    └── utils
        └── AppError.js
```
## Anotações sobre a aula

```
npm init -y
```

- -y: estabelece algumas configs pre configuradas
- sem o -y: será feito algumas perguntas: nome do projeto..

### Instalar todo o package.json

```
npm install
```

### Running

```
node src/file.js
```
### Depois de adicionado o start no package.json 
````
npm start
````

### Running Script

```
node run script
```

GET, POST, PUT, DELETE ..
PATCH: atualizar, mas dessa vez uma parte especifica de alguma coisa

### Route params
Valores obrigatórios
localhost/user/5 => host/<strong>recurso/route param</strong>

```
app.get("/message/:id", (req, res) => {
    res.send(`Olá n: ${req.params.id}`)
})
```

### Query Params 
Valores não obrigatórios
localhost/user?nome=Fernanda&age=25
````
const {page, limit} = req.query
````

### Controller Methods 
Um controller tem NO MÁXIMO 5 métodos, se passar disso considere criar outro controller
- Index: GET para listar vários registros
- Show: GET para exibir um regitsro especifico
- Create: POST para criar um registro
- Update: PUT para atualizar um registro
- Delete: DELETE para remover um registro

### HTTP Codes
1xx: Informativo
  102: Processando
2xx: Sucesso
3xx: Redirecionamento (Não está mais disponível naquele enereço)
  301: Movido permanentemente
  302: Movido
4xx: Erro do Cliente
  400: bad request
5xx: Erro do Servidor

### Middleware
Comumente denotada por uma variável chamada ***next***
São funções que têm acesso ao objeto de solicitação(requisição), o objeto de resposta(response), e a próxima função de middleware no ciclo solicitação-resposta do aplicativo.
- podem executar código
- fazer mudança nos objs de solicitação e resp
- encerrar o ciclo de solicitação-resp
- chamar o próximo middleware na pilha

````
function myMiddleware(req, resp, next) {
    resp.send("Passou pelo Middleware");
    next();
}
````


Boas práticas em BD:
- nomes de tabelas em minusculo e no plural
- tipos das colunas em caixa alta
- query em caixa alta
- nome de coluna separada por _


?? -> nulish operator 
````
name = user.name ?? name;
````

### Arquivo de configuração do Knex
````
npx knex init
````

### Migration
Forma de versionar o banco de dados 
- método UP: responsável por criar ou alterar algo no banco
- método DOWN: responsável pelo rollback. Ou seja, desfazer as alterações realizadas pela migration

### Rodando migrations
````
npx knex migrate:make createNotes
````
### Rodando migrations 
````
npx knex migrate:latest
````

### .onDelete("CASCADE")
Estrategia usada dentro da migration para deletar o registro caso a primarykey for deletada. Por exemplo tenho uma nota do usuário Pedro, quando Pedro for deletado eu deleto junto a nota dele. Garantindo CONSISTÊNCIA

### Spread ("...")
Ele basicamente permite que expressões expandam o conteúdo de arrays em locais onde múltiplos elementos são esperados
````
nomes =["José, Maria, Pedro"]
func({
  ...nomes,
  cidade
})
````

