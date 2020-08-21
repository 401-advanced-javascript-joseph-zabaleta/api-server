'use strict';

const express = require('express');
const router = express.Router();

const CategoriesModel = require('../models/categories/categories-model.js');
const worstCaseHandler = require('../middleware/500.js');

router.post('/categories', addCategories);
router.get('/categories', getAllCategories);
router.get('/categories/:id', getOneCategory);
router.put('/categories/:id', updateCategories);
router.delete('/categories/:id', deleteOneCategory);


async function addCategories(req, res, next) {
    try {
        const results = await CategoriesModel.create(req.body);
        res.status(200).json(results);
    } catch (err) {
        worstCaseHandler(err, res);
    };
};


async function getAllCategories(req, res, next) {
    try {
        const results = await CategoriesModel.get();
        res.status(200).json(results);
    } catch (err) {
        worstCaseHandler(err, res);
    };
};


async function getOneCategory(req, res, next) {
    try {
        const results = await CategoriesModel.get(req.params.id);
        res.status(200).json(results);
    } catch (err) {
        worstCaseHandler(err, res);
    };
};


async function updateCategories(req, res, next) {
    try {
        const results = await CategoriesModel.update(req.params.id, req.body)
        res.status(200).json(results);
    } catch (err) {
        worstCaseHandler(err, res);
    };
};


async function deleteOneCategory(req, res, next) {
    try {
        const results = await CategoriesModel.delete(req.params.id);
        res.status(200).json(results);
    } catch (err) {
        worstCaseHandler(err, res);
    };
};

module.exports = router;
