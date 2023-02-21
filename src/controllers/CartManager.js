/*import {promises as fs} from 'fs';
import { nanoid } from "nanoid";

class CartManager {
    constructor() {
        this.path = "./src/models/cart.json";
    }
    readProducts = async () => {
        let cart = await fs.readFile(this.path, "utf.8");
        return JSON.parce(cart);
    };
    writeProducts = async ( cart) =>{
        await fs.writeFile(this.path, JSON.stringify(cart));
    };
    addCarts = async () => {
        let cartsOld = await this.readProducts();
        let id = nanoid()
        let cartsConcat = ({id :id, products : []}, ...cartsOld)
        await this.writeProducts(cartsConcat)
        return "Carrito agregado"
    }

}
export default CartManager*/