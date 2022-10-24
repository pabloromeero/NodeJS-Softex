const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Página Inicial</h1>')
})
app.get('/contato/linkedin/', (req, res) => {
    res.send('<h2>https://www.linkedin.com/in/pablo-romero-50599a17b/</h2>')
})

app.get('/contato/github', (req, res) => {
    res.send('<h2>https://github.com/pabloromeero</h2>')
})
app.listen(8080, () => {
    console.log('Servidor rodando na URL http://localhost:8080')
});