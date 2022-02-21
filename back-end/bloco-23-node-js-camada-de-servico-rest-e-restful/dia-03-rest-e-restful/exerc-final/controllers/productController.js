const express = require('express');
const ProductModel = require('../model/productModel');
const rescue = require('express-rescue');

const router = express.Router();

router.get('/', rescue(async (req, res, next) => {
  const products = await ProductModel.getAll();

  return res.status(200).json(products);
}));

router.get('/:id', rescue(async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  res.status(200).json(product);
}));

router.post('/', rescue(async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
}));

router.delete('/:id', rescue(async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.status(202).json(products);
}));

router.put('/:id', rescue(async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.status(202).json(products);
}));

module.exports = router;