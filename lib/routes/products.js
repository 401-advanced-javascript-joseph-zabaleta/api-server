'use strict';

const express = require('express');
const router = express.Router();



let products = {};


router.post('/products', (req, res) => {
    products[req.body.id] = req.body;
    res.send(req.body);
});

router.get('/products', (req, res) => {
    res.send(products)
});

router.get('/products/:id', (req, res) => {
    res.send(products[req.params.id]);
});

router.put('/products/:id', (req, res) => {
    let current = products[req.params.id];

    if (req.body.category) {
        current.category = req.body.category;
    };

    if (req.body.name) {
        current.name = req.body.name;
    };

    if (req.body.display_name) {
        current.display_name = req.body.display_name;
    };

    if (req.body.description) {
        current.description = req.body.description;
    };


    res.send(products[req.params.id]);

});

router.delete('/products/:id', (req, res) => {
    delete products[req.params.id];

    res.send({'deleted': 'deleted'});
});

module.exports = router;
