const express = require('express');

const ProductsService = require("../service/product.service");
const service = new ProductsService();
const router = express.Router();

router.get('/', (req, res) => {
  const products = service.findAll();
  res.json(products);
});

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