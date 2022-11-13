const connection = require('../config/config')

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate() {
    connection.query('SELECT * FROM product ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      this.products = results;
    })
  }

  create(data) {
    const newProduct = {
      id: this.products.slice(-1)[0].id + 1,
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id) {
    return this.products.find(item => item.id == id);
  }

  update(id, changes) {
    const index = this.products.findIndex(item => item.id == id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex(item => item.id == id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;