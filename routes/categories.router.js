const express = require('express');
const {faker} = require('@faker-js/faker');
const router = express.Router();
const CategoriesService = require('../service/categories.service')
const service = new CategoriesService();

router.get('/', (req, res) => {
  const { size, offset } = req.query;
  const limit = size;
  const categories = service.findAll(limit, offset);
  res.json(categories);
})

router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const category = service.findOne(id);
    res.json(category)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

// router.get('/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params
//   res.json({
//     categoryId,
//     productId
//   })
// })

router.post('/', (req, res) => {
  try {
    const body = req.body;
    const newCategory = service.create(body);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.patch('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = service.update(id, body);
    res.json(product); 
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
});

router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const answer = service.delete(id);
    res.json(answer); 
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
});

module.exports = router;
