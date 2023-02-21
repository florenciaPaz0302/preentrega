import { Router } from "express";
import { CartManager } from "../controllers/CartManager.js";

const routerCarts = Router()
const carts = new CartManager

routerCarts.post(`/`, async (req, res) =>{
    res.send(await carts.addCarts())

})


export default routerCarts