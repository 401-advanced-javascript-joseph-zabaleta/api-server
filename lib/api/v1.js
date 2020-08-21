'use strict';

const express = require('express');
const router = express.Router();

const modelFinder = require('../middleware/model-finder.js');
const worstCaseHandler = require('../middleware/500.js');

router.param('model', modelFinder);

router.get('/:model', getAll);
router.get('/:model/:id', getOne);
router.post('/:model', addOne);
router.put('/:model/:id', updateOne);
router.delete('/:model/:id', deleteOne);

async function getAll(req, res, next) {
    try {
        const results = await req.model.get();
        res.status(200).json(results);
    } catch (err) {
        worstCaseHandler(err, res);
    };
};

async function getOne(req, res, next) {
    try {
        const results = await req.model.get(req.params.id);
        res.status(200).json(results);
    } catch (err) {
        worstCaseHandler(err, res);
    };
};

async function addOne(req, res, next) {
    try {
        const results = await req.model.create(req.body);
        res.status(200).json(results);
    } catch (err) {
        worstCaseHandler(err, res);
    };
};

async function updateOne(req, res, next) {
    try {
        const results = await req.model.update(req.params.id, req.body)
        res.status(200).json(results);
    } catch (err) {
        worstCaseHandler(err, res);
    };
};

async function deleteOne(req, res, next) {
    try {
        const results = await req.model.delete(req.params.id);
        res.status(200).json(results);
    } catch (err) {
        worstCaseHandler(err, res);
    };
};

module.exports = router;
