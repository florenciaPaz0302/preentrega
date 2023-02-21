import express from "express";
import routerProd from './routes/product.js'
import {__dirname} from './path.js'
import multer from 'multer'
import {engine} from 'express-handlebars'
import * as path from 'path'


//const upload = multer ({dest:`src/public/img`})sin formato
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `src/public/img`)
    },
    filename: (req,file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`)
    }
})
const upload = multer({storage: storage})


const app = express()
const PORT = 4000
   
//midd
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", path.resolve(__dirname, "./views"))



//rutas
app.use(`/static`, express.static(__dirname + `/public`))
app.use(`/api/product`, routerProd)

app.get(`/static`, (req,res) => {
    res.render("home", {
        titulo: "Back",
        mensaje: "mundo"
    })
})

app.post(`/upload`,upload.single(`product`), (req,res) => {
    console.log(req.file)
    res.send("imagen cargada")
})


app.listen(PORT, () => {
    console.log(`server on port ${PORT}`)
})
/*const productos = [
    {
        nombre: "remera",
        id:1,
        categoria: "ropa"
    },
    {
        nombre: "short",
        id:2,
        categoria: "ropa"
    },
    {
        nombre: "medias",
        id:3,
        categoria: "accesorios"
    },
]*/
/*
app.get(`/producto/:id`, async (req, res) => {
    console.log(productos.find(prod => prod.id === parseInt(req.params.id)))
    console.log(req.params.id)
    res.send("pagina de contacto")

})
app.get(`/producto`, (req,res) => {
    let {categoria} = req.query
    console.log(productos.filter(producto => producto.categoria === categoria))
    res.send("producto route")
})
app.get(`/`, (req,res) => {
    res.send("pagina de inicio")
})*/
/*const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
import routerCarts from './routes/carts.js'
import { fileURLToPath } from 'url'

app.use(`/api/cart`, routerCarts)
app.post(`/upload`,upload.single(`product`), (req,res) => {
    console.log(req.file)
    res.send("imagen cargada")
})

*/
