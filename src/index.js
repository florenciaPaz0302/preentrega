/*const fs = require(`fs`)

const busqueda = async () => {

    let consulta = await fs.promises.readFile(`./ejemplo.txt`, ùtf-8 )
    let aux = JSON.parse(consulta)

    if(aux.some(producto => producto.id === idParametro)) {
    //existeono
    } else {
         console.log("prod no encontrado")
    }  
}
const PORT = 4000
const http = require(`http`)
const server = http.createServer((request, response) => {
    response.end("Hola mundo!!!")
})
server.listen(PORT, () =>{
    console.log(`Server on port ${PORT}`)

})*/

import express from 'express'
//const express = require('express')
const app = express()
const PORT = 4000

const productos = [
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
]
app.use(express.urlencoded({extended: true}))

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
})
app.listen(PORT, () => {
    console.log(`server on port ${PORT}`)

})