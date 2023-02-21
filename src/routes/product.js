import { Router } from "express";
import { ProductManager } from "../controllers/ProductManager.js";

const productManager = new ProductManager(`src/models/productos.json`)
const routerProd = Router()

routerProd.get(`/`, async (req, res) =>{//obtenet todos los usuarios
    const { limit } = req.query;
    console.log(limit)
    const productos = await productManager.getProducts()
    console.log(productos)
    res.send(JSON.stringify(productos))
 })

 routerProd.get(`/:id`, async(req, res) =>{//obtener usuario por id
    const producto = await productManager.getProductById(req.params.id)
    console.log(producto)
    res.send(JSON.stringify(producto))
 })

 routerProd.post(`/`, async (req, res) =>{//Crear el usuario
    let mensaje = await productManager.addProduct(req.body)
    res.send(mensaje)
 })

 routerProd.delete(`/:id`, async (req, res) =>{// eliminar usuario
    let mensaje = await productManager.deleteProduct(req.params.id)
    res.send("mensaje")
 })
 routerProd.put(`/:id`, async (req, res) =>{//actualizar usuario
    let mensaje = await productManager.updateProduct(req.params.id, req.body)
    res.send("mensaje")
 })

 export default routerProd