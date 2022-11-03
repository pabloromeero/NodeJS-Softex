const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.status(200).send('<h2>Pagina inicial</h2>')
})


app.get('/404', (req, res) => {
    res.status(404).send('<h1>Pagina nao encontrada!</h1>')
})

app.listen(8080, () => {
    console.log('Servidor rondando na porta 8080!')
})
