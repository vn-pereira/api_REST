# API_REST
Implementação da API rest usando verbos HTTP e realizando operações CRUD, utilizando o banco dados SQlite.

### Para começar:
- https://github.com/vn-pereira/To_Do_App.git
- npm i express --save
- npm i nodemon --save-dev
- npm i sqlite3@latest
- npm start

###### Com os comados acima você clonará o reppositório e instalará as suas depencias no seu editor.
------------

### Recursos
- server.js: realiza as operações de CRUD na aplicação utilizando métodos HTTP(GET, PUT, UPDATE, DELETE).

### Para testar:
####  Sugestão de ferramenta
- Insomnia Rest: fornece uma ótima comunicação com a API
**Link - https://insomnia.rest/download/**

### Rotas
- **GET **- Para acessar todas as informações da API => http://localhost:3000/tarefas ou caso prefira acessar uma informação, é necessário informar o **id **do dado=> http://localhost:3000/tarefas/id.
- **POST **- Utilize o corpo da requisição para adicionar uma informação => http://localhost:3000/tarefas.
- **PUT** - Atualize as informações contidas no corpo da requisição, sendo necessário informar o **id** do dado que pretende alterar =>  http://localhost:3000/tarefas/id.
- **DELETE** - Deleta as informações contidas no corpo da requisição, é necessário informar o** id **do dado que pretende apagar =>  http://localhost:3000/tarefas/id.

### Status do projeto:
Em andamento e aceitando contribuições.

### Contato
Vanessa Pereira - https://www.linkedin.com/in/vanessa-pereira-601304135/

E-mail: vanessa.pereira.o@hotmail.com