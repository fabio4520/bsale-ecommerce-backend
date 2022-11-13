
const connection = require('../config/config')
  
class CategoriesService {

  constructor(){
    this.categories = [];
    this.generate();
  }

  generate() {
    connection.query('SELECT * FROM category ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      this.categories = results;
    })
  }

  create(data) {
    const newCategory = {
      id: this.categories.slice(-1)[0].id + 1,
      ...data
    }
    this.categories.push(newCategory);
    return newCategory;
  }

  findAll() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find(item => item.id == id);
  }

  update(id, changes) {
    const index = this.categories.findIndex(item => item.id == id);
    if (index === -1) {
      throw new Error('Category not found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes
    };
    return this.categories[index];
  }

  delete(id) {
    const index = this.categories.findIndex(item => item.id == id);
    if (index === -1) {
      throw new Error('Category not found');
    }
    this.categories.splice(index, 1);
    return { id };
  }

}

module.exports = CategoriesService;