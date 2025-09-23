const products = [
  {
    id: 1,
    title: "Auriculares Redragon",
    description: "Auriculares para pc",
    price: 140,
    thumbnail: "",
    code: "1AX23G",
    stock: 4
  },
  {
    id: 2,
    title: "Teclado Corsair",
    description: "Teclado inalambrico",
    price: 250,
    thumbnail: "",
    code: "5GTT33",
    stock: 6
  }
]

class ProductManager {
  #admin;

  constructor(products) {
    this.products = products;
    this.#admin = true;
  }

  getProducts() {
    return { message: "Lista de Productos", products: this.products };
  }

  deleteProductById(pid) {
    try {
      /*
        if (this.#admin) {

          const newProducts = this.products.filter( (product) => product.id !== pid );
          this.products = newProducts;
          return { message: "Producto Eliminado", products: this.products };
        } else {
          throw new Error("Permiso Denegado");
        }
      */
      if(!this.#admin) throw new Error("Permiso Denegado");

      const newProducts = this.products.filter( (product) => product.id !== pid );
      this.products = newProducts;
      return { message: "Producto Eliminado", products: this.products };
    } catch (error) {
      console.log("Error al borrar un producto: ", error.message);
    }
  }

  generateId(){
    if(this.products.length > 0){
      return this.products[ this.products.length - 1 ].id + 1;
    }else{
      return 1;
    }
  }

  addProduct(newProduct){
    try {
      if(!this.#admin) throw new Error("Permiso Denegado");

      const id = this.generateId();
      this.products.push({ id, ...newProduct });
      return { message: "Producto Agregado", products: this.products };
    } catch (error) {
      console.log("Error al agregar un nuevo producto:", error.message);
    }
  }

  updateProductById(pid, update){
    try {
      if(!this.#admin) throw new Error("Permiso Denegado");

      const indexProduct = this.products.findIndex( (product) => product.id === pid );
      if(indexProduct === -1) throw new Error("El producto no existe");

      this.products[indexProduct] = { ...this.products[indexProduct], ...update };
      return { message: "Producto Actualizado", products: this.products };
    } catch (error) {
      console.log("Error al actualizar el producto:", error.message);
    }
  }

}

const productManager = new ProductManager(products);

console.log( productManager.getProducts() );
console.log( productManager.deleteProductById(1) );
console.log( productManager.addProduct({ title: "Mouse GTX", price: 170 , stock: 20 }) );
console.log( productManager.updateProductById(10, { price: 6400 }) );
