'use strict';

const express = require('express');
const router = express.Router();

const ProductsModel = require('../models/products/products-model.js');
const worstCaseHandler = require('../middleware/500.js');

router.post('/products', addProducts);
router.get('/products', getAllProducts);
router.get('/products/:id', getOneProduct);
router.put('/products/:id', updateProducts);
router.delete('/products/:id', deleteOneProduct);

async function addProducts(req, res, next) {
    try {
        const results = await ProductsModel.create(req.body);
        res.status(200).json(results);
    } catch (err) {
        worstCaseHandler(err, res);
    };
};


async function getAllProducts(req, res, next) {
    try {
        const results = await ProductsModel.get();
        res.status(200).json(results);
    } catch (error) {
        console.log('Something went wrong with the retrieval.')
        console.log(error);
    };
};


async function getOneProduct(req, res, next) {
    try {
        const results = await ProductsModel.get(req.params.id);
        res.status(200).json(results);
    } catch (error) {
        console.log('Something went wrong with the retrieval.')
        console.log(error);
    };
};


async function updateProducts(req, res, next) {
    try {
        const results = await ProductsModel.update(req.params.id, req.body)
        res.status(200).json(results);
    } catch (error) {
        console.log('Something went wrong with the update.')
        console.log(error);
    };
};


async function deleteOneProduct(req, res, next) {
    try {
        const results = await ProductsModel.delete(req.params.id);
        res.status(200).json(results);
    } catch (error) {
        console.log('Something went wrong with the deletion.')
        console.log(error);
    };
};

module.exports = router;
