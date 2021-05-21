const express = require('express')
const app = express()
app.use (express.json())
const path = require('path')
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "uploads/");
    },
    filename: function(req, file, cb){
        cb(null, req.body.nome + req.body.game + req.body.nota + path.extname(file.originalname));
    }
})

const upload = multer({storage})

const axios = require('axios')
const api = axios.create({
    baseURL: 'http://localhost:8085/'
})

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

app.use('/css',express.static('css'))
app.use('/uploads',express.static('uploads'))

const handlebars = require('express-handlebars')
app.engine("handlebars", handlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')




app.get("/", (req, res) => {
    api.get('/Comentarios').then((dados) => { 
    const notas = dados.data
    notas.stringify = JSON.stringify(notas.data);
     res.render('index', {Notas: notas}),
     console.log(notas)
    })
 })


    app.post("/postar", upload.single("img_game"), (req, res) => {
          api.post('/novoComentario', {
          nome: req.body.nome,  
          game: req.body.game,
          plataforma: req.body.plataforma,
          comentario: req.body.comentario,
          nota: req.body.nota,
          genero: req.body.genero,
          }).then((response) =>{
    
            const coment = response.data
            coment.stringify = JSON.stringify(coment);
            res.render('index', {newcoment: coment}),
            console.log(coment)
    
          }).catch((err) => {
            res.render('index')
            console.log(err.data);
          })
        }) 


app.get("/inserir", (req, res) => {
    res.render('inserir')
})


app.listen(3000, ()=> {
    console.log("Servidor rodando!")
})