const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./database.db');

//Insira aqui o código da tarefa proposta!
//Apesar de não ser a melhor forma de manter um projeto, utilize apenas esse arquivo. Estamos testando!
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require ('body-parser');
const cors = require('cors');

app.use(cors())
app.use(bodyParser.json()); //conversão do objeto para JSON

app.get('/', (request, response) =>{
    response.send("Hello world!")
})

app.get('/tarefas', (request, response) =>{
    db.all('select * from tarefas', [], (err, row) => {
        response.send(JSON.stringify({results: row}))  
    }) 
});

app.get('/tarefas/:id', (request, response) =>{
    db.get('SELECT * FROM TAREFAS WHERE id like ?', [request.params.id], (err) =>{
        if(err) console.log('Algo não está certo jovem')
        response.send();
    })
})

app.post('/tarefas', (request, response) =>{
    //inserir no BD os dados enviados como JSON
    //receber os dados em JSON
    //passar os dados para uma query
    console.log(request.body)
    db.run(`INSERT into TAREFAS (titulo, descricao, status) 
    VALUES (?, ?, ?)`, [request.body.titulo, request.body.descricao, request.body.status]);
        response.status(200).send('item inserido');  
});

app.delete('/tarefas/:id', (request, response) =>{
    db.run(`DELETE FROM TAREFAS WHERE id=? `, [request.params.id], (err) =>{  
        if(err) console.log('continue tentando');
        response.status(200).send('Item deletado');
    });
})

app.put('/tarefas/:id', (request, response) =>{
    db.run(`UPDATE TAREFAS SET titulo=?, descricao=?, status=? WHERE id=?`, 
            [request.body.titulo, request.body.descricao, request.body.status, request.params.id], (err) =>{
        if(err) console.log('Deu ruim');
        response.status(200).send('Item modificado')
    })
});

app.listen(port, ()=> {
    console.log(`Ouvindo porta http://localhost:${port}`)
});

process.on('SIGINT', ()=> {
    db.close((err) => {
        console.log("Banco encerrado com sucesso!");
        process.exit(0);
    })
})