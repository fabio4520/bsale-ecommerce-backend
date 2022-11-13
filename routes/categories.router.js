const express = require('express');
const {faker} = require('@faker-js/faker');
const router = express.Router();

router.get('/', (req, res) => {
  const categories = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    categories.push({
      id: index,
      name: faker.commerce.productAdjective()
    })
  }
  res.json(categories);
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    category: faker.commerce.productAdjective()
  })
})

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params
  res.json({
    categoryId,
    productId
  })
})

module.exports = router;
