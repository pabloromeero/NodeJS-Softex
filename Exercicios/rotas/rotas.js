const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Página Inicial</h1>')
})
app.get('/iniciar', (req, res) => {
    res.status(404).send('Caminho não encontrado!')
})
app.get('/user', function (req, res) {
    res.send('Lista de usuários');
  });
   
app.post('/user/insert', function (req, res) {
    res.send('Inserir um usuário');
  });
   
app.put('/user/:id', function (req, res) {
    res.send(`Editar um usuário com o id ${req.params.id}`);
  });
   
app.delete('/user/:id', function (req, res) {
    res.send(`Excluir um usuário com o id ${req.params.id}`);
  });

app.listen(8080, () => {
    console.log('Servidor rodando na URL http://localhost:8080')
});