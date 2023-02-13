import {promises as fs} from 'fs'

export class ProductManager {
    constructor(path) {
        this.path = path
    }

    static incrementarID() {
        if(this.idIncrement) {
            this.idIncrement++
        } else {
            this.idIncrement = 1
        }
        return this.idIncrement
    }

    async addProduct(producto) {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        producto.id = ProductManager.incrementarID()
        prods.push(producto)
        await fs.writeFile(this.path, JSON.stringify(prods))
        return "el Producto se creo"
    }

    async getProducts() {
        try {
            const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
            return prods
        } catch(error) {
            return error
        }
        
    }

    async getProductById(id) {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        if(prods.some(prod => prod.id === parseInt(id))) {
            return prods.find(prod => prod.id === parseInt(id))
        } else {
            return "no se encontro el producto"
        }
    }

    async updateProduct(id, {title, description, price, thumbnail, code, stock}) {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        if(prods.some(prod => prod.id === parseInt(id))) {
            let index= prods.findIndex(prod => prod.id === parseInt(id))
            prods[index].title = title
            prods[index].description = description
            prods[index].price = price
            prods[index].thumbnail = thumbnail
            prods[index].code = code
            prods[index].stock = stock
            await fs.writeFile(this.path, JSON.stringify(prods))
            return "Producto actualizado"
        } else {
            return "no se encontro el producto"
        }
    }

    async deleteProduct(id) {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        if(prods.some(prod => prod.id === parseInt(id))) {
           const prodsFiltrados = prods.filter(prod => prod.id !== parseInt(id))
           await fs.writeFile(this.path, JSON.stringify(prodsFiltrados))
           return "Producto eliminado"
        } else {
            return "Producto no encontrado"
        }
    }

}
/*import { promises as fs } from "fs"

export default class ProductManager {
  constructor() {
    this.path = "./productos.txt"
    this.products = []
  }

  static id = 0

  addProduct = async (title, description, price, imagen, code, stock) => {

    ProductManager.id++

    let newProduct = {
        title, description, price, imagen, code, stock, id: ProductManager.id
    };
    this.products.push(newProduct)
    
    await fs.writeFile(this.path, JSON.stringify(this.products))
  };
  readProducts = async () => {
    let respuesta = await fs.readFile(this.path, "utf-8")
    return JSON.parse(respuesta)

  }

  getProducts = async () => {
    let otraRespuesta = await this.readProducts()
    return console.log(otraRespuesta)
  }
  getProductsById = async (id) => {
    let respuesta3 = await this.readProducts()
    if(!respuesta3.find(product => product.id === id)){
        console.log("no se encontro el producto")
    }else {
        console.log(respuesta3.find(product => product.id === id))
    }
  }
  deleteProductsById = async (id) => {
    let respuesta3 = await this.readProducts();
    let productfilter = respuesta3.filter(products => products.id != id)
    await fs.writeFile(this.path, JSON.stringify(productfilter));
    console.log("se elimino el Prod")
 };
  updateProducts = async ({id, ...producto}) => {
    await this.deleteProductsById(id);
    let prod = await this.readProducts()
    console.log(prod)
    let productAgregado = [{ id, ...producto }, ...prod];
    await fs.writeFile(this.path, JSON.stringify(productAgregado));
  };
};

//const productos = new ProductManager

productos.addProduct("Remera rosa", "Rosa mangas cortas", 500, "Imagen1", "prueba123", 3)
productos.addProduct("Remera verde", "verde mangas cortas", 400, "Imagen2", "prueba124", 4)
productos.addProduct("Remera roja", "roja mangas cortas", 300, "Imagen3", "prueba125", 5)
productos.addProduct("short rosa", "descripcion short1", 1100, "Imagen4", "prueba126", 2)
productos.addProduct("Short verde", "descripcion short2", 300, "Imagen5", "prueba126", 10)
productos.addProduct("Short azul", "descripcion short3", 900, "Imagen6", "prueba127", 9)
productos.addProduct("Short amarillo", "descripcion short4", 400, "Imagen7", "prueba128", 8)
productos.addProduct("Short naranja", "descripcion short5", 500, "Imagen8", "prueba129", 7)
productos.addProduct("medias azules", "descripcion medias1", 100, "Imagen9", "prueba130", 6)
productos.addProduct("medias rosas", "descripcion medias1", 200, "Imagen10", "prueba131", 12)*/

//productos.getProducts()

//productos.getProductsById(2)
//productos.deleteProductsById(3)
/*productos.updateProducts({
  title: 'Remera verde',
    description: 'verde mangas cortas',
    price: 2400,
    imagen: 'Imagen2',
    code: 'prueba123',
    stock: 4,
    id: 2
})*/