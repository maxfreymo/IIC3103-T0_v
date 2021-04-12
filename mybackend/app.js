
// Recuerda que para hacer cambios sin reiniciar la app, utiliza nodemon app.js (en vez de node)
const express = require("express");
var request = require("request");

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {res.send('Página de Inicio')});

// Breaking Bad Temporada 1
app.get('/BreakingBad/temporada1', (req, res) => {
    request(
        "https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Breaking+Bad",
        function(error, response, body) {
            if (!error && response.statusCode == 200){
                var parsedBody = JSON.parse(body);
                let chapters = [];
                // Obtengo los nombres de los episodios de Better Call Saul
                for (let i = 0; i < parsedBody.length; i++) {                  
                    if (parsedBody[i]["season"] === "1"){
                        var chapter_name = `${parsedBody[i]["title"]}:${parsedBody[i]["episode_id"]}`;
                        chapters.push(chapter_name);
                    }
                }
                res.send(chapters);
            }
        }
    );

});

// Breaking Bad Temporada 2
app.get('/BreakingBad/temporada2', (req, res) => {
    request(
        "https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Breaking+Bad",
        function(error, response, body) {
            if (!error && response.statusCode == 200){
                var parsedBody = JSON.parse(body);
                let chapters = [];
                // Obtengo los nombres de los episodios de Better Call Saul
                for (let i = 0; i < parsedBody.length; i++) {
                    if (parsedBody[i]["season"] === "2"){
                        var chapter_name = `${parsedBody[i]["title"]}:${parsedBody[i]["episode_id"]}`;
                        chapters.push(chapter_name);
                    }
                }
                res.send(chapters);
            }
        }
    );
});

// Breaking Bad Temporada 3
app.get('/BreakingBad/temporada3', (req, res) => {
    request(
        "https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Breaking+Bad",
        function(error, response, body) {
            if (!error && response.statusCode == 200){
                var parsedBody = JSON.parse(body);
                let chapters = [];
                // Obtengo los nombres de los episodios de Better Call Saul
                for (let i = 0; i < parsedBody.length; i++) {        
                    if (parsedBody[i]["season"] === "3"){
                        var chapter_name = `${parsedBody[i]["title"]}:${parsedBody[i]["episode_id"]}`;
                        chapters.push(chapter_name);
                    }
                }
                res.send(chapters);
            }
        }
    );
});

// Breaking Bad Temporada 4
app.get('/BreakingBad/temporada4', (req, res) => {
    request(
        "https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Breaking+Bad",
        function(error, response, body) {
            if (!error && response.statusCode == 200){
                var parsedBody = JSON.parse(body);
                let chapters = [];
                // Obtengo los nombres de los episodios de Better Call Saul
                for (let i = 0; i < parsedBody.length; i++) {
                    if (parsedBody[i]["season"] === "4"){
                        var chapter_name = `${parsedBody[i]["title"]}:${parsedBody[i]["episode_id"]}`;
                        chapters.push(chapter_name);
                    }
                }
                res.send(chapters);
            }
        }
    );
});

// Breaking Bad Temporada 5
app.get('/BreakingBad/temporada5', (req, res) => {
    request(
        "https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Breaking+Bad",
        function(error, response, body) {
            if (!error && response.statusCode == 200){
                var parsedBody = JSON.parse(body);
                let chapters = [];
                // Obtengo los nombres de los episodios de Better Call Saul
                for (let i = 0; i < parsedBody.length; i++) {
                    if (parsedBody[i]["season"] === "5"){
                        var chapter_name = `${parsedBody[i]["title"]}:${parsedBody[i]["episode_id"]}`;
                        chapters.push(chapter_name);
                    }
                }
                res.send(chapters);
            }
        }
    );
});


// Better Call Saul Temporada 1
app.get('/BetterCallSaul/temporada1', (req, res) => {
    request(
        "https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul",
        function(error, response, body) {
            if (!error && response.statusCode == 200){
                var parsedBody = JSON.parse(body);
                let chapters = [];
                // Obtengo los nombres de los episodios de Better Call Saul
                for (let i = 0; i < parsedBody.length; i++) {
                    if (parsedBody[i]["season"] === "1"){
                        var chapter_name = `${parsedBody[i]["title"]}:${parsedBody[i]["episode_id"]}`;
                        chapters.push(chapter_name);
                    }
                }
                res.send(chapters);
            }
        }
    );
});

// Better Call Saul Temporada 2
app.get('/BetterCallSaul/temporada2', (req, res) => {
    request(
        "https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul",
        function(error, response, body) {
            if (!error && response.statusCode == 200){
                var parsedBody = JSON.parse(body);
                let chapters = [];
                // Obtengo los nombres de los episodios de Better Call Saul
                for (let i = 0; i < parsedBody.length; i++) {
                    if (parsedBody[i]["season"] === "2"){
                        var chapter_name = `${parsedBody[i]["title"]}:${parsedBody[i]["episode_id"]}`;
                        chapters.push(chapter_name);
                    }
                }
                res.send(chapters);
            }
        }
    );
});

// Better Call Saul Temporada 3
app.get('/BetterCallSaul/temporada3', (req, res) => {
    request(
        "https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul",
        function(error, response, body) {
            if (!error && response.statusCode == 200){
                var parsedBody = JSON.parse(body);
                let chapters = [];
                // Obtengo los nombres de los episodios de Better Call Saul
                for (let i = 0; i < parsedBody.length; i++) {
                    if (parsedBody[i]["season"] === "3"){
                        var chapter_name = `${parsedBody[i]["title"]}:${parsedBody[i]["episode_id"]}`;
                        chapters.push(chapter_name);
                    }
                }
                res.send(chapters);
            }
        }
    );
});

// Better Call Saul Temporada 4
app.get('/BetterCallSaul/temporada4', (req, res) => {
    request(
        "https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul",
        function(error, response, body) {
            if (!error && response.statusCode == 200){
                var parsedBody = JSON.parse(body);
                let chapters = [];
                // Obtengo los nombres de los episodios de Better Call Saul
                for (let i = 0; i < parsedBody.length; i++) {
                    if (parsedBody[i]["season"] === "4"){
                        var chapter_name = `${parsedBody[i]["title"]}:${parsedBody[i]["episode_id"]}`;
                        chapters.push(chapter_name);
                    }
                }
                res.send(chapters);
            }
        }
    );
});

// Better Call Saul Temporada 5
app.get('/BetterCallSaul/temporada5', (req, res) => {
    request(
        "https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul",
        function(error, response, body) {
            if (!error && response.statusCode == 200){
                var parsedBody = JSON.parse(body);
                let chapters = [];
                // Obtengo los nombres de los episodios de Better Call Saul
                for (let i = 0; i < parsedBody.length; i++) {
                    if (parsedBody[i]["season"] === "5"){
                        var chapter_name = `${parsedBody[i]["title"]}:${parsedBody[i]["episode_id"]}`;
                        chapters.push(chapter_name);
                    }
                }
                res.send(chapters);
            }
        }
    );
});

// Better Call Saul Temporada 6
app.get('/BetterCallSaul/temporada6', (req, res) => {
    request(
        "https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul",
        function(error, response, body) {
            if (!error && response.statusCode == 200){
                var parsedBody = JSON.parse(body);
                let chapters = [];
                // Obtengo los nombres de los episodios de Better Call Saul
                for (let i = 0; i < parsedBody.length; i++) {
                    if (parsedBody[i]["season"] === "6"){
                        var chapter_name = `${parsedBody[i]["title"]}:${parsedBody[i]["episode_id"]}`;
                        chapters.push(chapter_name);
                    }
                }
                res.send(chapters);
            }
        }
    );
});


// Chapter Information
app.get('/chapter/:id', (req, res) => {
    console.log('ID:', req.params.id);
    var ruta = `https://tarea-1-breaking-bad.herokuapp.com/api/episodes/${req.params.id}`;
    console.log('Ruta:', ruta);
    request(
        ruta,
        function(error, response, body) {
            if (!error && response.statusCode == 200){
                var parsedBody = JSON.parse(body);
                let dataChapter = [];
                // Obteniendo todas las claves del JSON
                for (var clave in parsedBody[0]){
                    // Controlando que json realmente tenga esa propiedad
                    if (parsedBody[0].hasOwnProperty(clave)) {
                    // pusheando la clave + su valor
                    dataChapter.push(`${clave}: ${parsedBody[0][clave]}`);
                    }
                }
                res.send(dataChapter);
            }
        }
    );
});


// Character Information
app.get('/character/:name', (req, res) => {
    console.log('ID:', req.params.name);
    var _id = 1;
    var ruta = `https://tarea-1-breaking-bad.herokuapp.com/api/characters`;
    console.log('Ruta:', ruta);
    request(
        ruta,
        function(error, response, body) {
            if (!error && response.statusCode == 200){
                var parsedBody = JSON.parse(body);
                // Obteniendo todas las claves del JSON
                let dataCharacter = [];
                for (let step = 0; step < parsedBody.length; step++)
                {
                    for (var clave in parsedBody[step]){
                        // Controlando que json realmente tenga esa propiedad
                        if (parsedBody[step].hasOwnProperty(clave)) {
                            if (parsedBody[step]["name"] == req.params.name) {
                                // pusheando la clave + su valor
                                dataCharacter.push(`${clave}: ${parsedBody[step][clave]}`);
                        }
                            }

                    }
                }

                res.send(dataCharacter);
            }
        }
    );
});

app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)});