import express from "express";
import routerProd from './routes/product.js'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const __filename = fileURLToPath(import.meta.url)
export const __dirname = dirname(__filename)


const app = express()
const PORT = 4000
   
//midd
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//rutas
app.use(`/static`, express.static(__dirname + `/public`))
app.use(`/api/product`, routerProd)


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