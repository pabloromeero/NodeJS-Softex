const express = require('express')
const app = express()
var carros = ['fiesta', 'saveiro'];

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>
res.send("<h3>Rotas no Express</h3><p>Rota principal")
);

app.get('/sobre', (req, res) =>
res.send("<h3>Rotas no Express</h3><p>Rota sobre")
);

app.get('/users/:name', (req, res) =>{
    return res.json([name]);
});

app.post('/cars/', (req, res) => {
    let name = req.body.name;
    carros[(carros.length)] = name;
    return res.json([carros[(carros.length - 1)]]);
});

app.get('/cars/:id', (req, res) => {
    let id = req.params.id;
    return res.json([carros[id]])
}); 

app.put('/cars/update/:id', (req, res) => {
    let name = req.body.name;
    carros[req.params.id] = name;
    return res.json(carros[req.params.id]);
});

app.delete('/cars/delete/:id', (req, res) => {
    let id = req.params.id;
    carros[id] = null; //deletar item
    return res.json(carros[id]);
});


app.listen(8080, () => 
console.log('Servidor iniciado na porta 8080')
);

/*
 Utilizei as rotas com Express em diferentes cenários em relação às requisições GET, POST, PUT e DELETE, 
 onde podemos utilizar para outros métodos/verbos HTTP possibilitando criar aplicações web e APIs de forma robusta e prática.
*/