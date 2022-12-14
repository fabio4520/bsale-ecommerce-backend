const express = require('express');

const ProductsService = require("../service/product.service");
const service = new ProductsService();
const router = express.Router();

// GET /api/v1/products
// GET /api/v1/products?size=5&offset=0
router.get('/', (req, res) => {
  const { size, offset } = req.query;
  const limit = size;
  const products = service.findAll(limit, offset);
  res.json(products);
});

// GET /api/v1/products/1
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const product = service.findOne(id);
    res.json(product)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

// POST /api/v1/products
router.post('/', (req, res) => {
  try {
    const body = req.body;
    const newProduct = service.create(body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

// PATCH /api/v1/products/1
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

// DELETE /api/v1/products/1
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