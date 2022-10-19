const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Rota get')
})
app.post('/post', (req, res) => {
    res.send('Rota post')
})
app.listen(8080, function(){
    console.log('Servidor rodando na URL http://localhost:8080')
});



