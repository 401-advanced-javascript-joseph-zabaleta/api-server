'use strict';

const express = require('express');
const router = express.Router();

const CategoriesModel = require('../models/categories/categories-model.js');


router.post('/categories', addCategories);
router.get('/categories', getAllCategories);
router.get('/categories/:id', getOneCategory);
router.put('/categories/:id', updateCategories);
router.delete('/categories/:id', deleteOneCategory);


async function addCategories(req, res, next) {
    try {
        const results = await CategoriesModel.create(req.body);
        res.status(200).json(results);
    } catch (error) {
        console.log('Something went wrong with adding a record.')
        console.log(error);
    };
};


async function getAllCategories(req, res, next) {
    try {
        const results = await CategoriesModel.get();
        res.status(200).json(results);
    } catch (error) {
        console.log('Something went wrong with the retrieval.')
        console.log(error);
    };
};


async function getOneCategory(req, res, next) {
    try {
        const results = await CategoriesModel.get(req.params.id);
        res.status(200).json(results);
    } catch (error) {
        console.log('Something went wrong with the retrieval.')
        console.log(error);
    };
};


async function updateCategories(req, res, next) {
    try {
        const results = await CategoriesModel.update(req.params.id, req.body)
        res.status(200).json(results);
    } catch (error) {
        console.log('Something went wrong with the update.')
        console.log(error);
    };
};


async function deleteOneCategory(req, res, next) {
    try {
        const results = await CategoriesModel.delete(req.params.id);
        res.status(200).json(results);
    } catch (error) {
        console.log('Something went wrong with the deletion.')
        console.log(error);
    };
}

module.exports = router;
