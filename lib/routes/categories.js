'use strict';

const express = require('express');
const router = express.Router();



let categories = {};


router.post('/categories', (req, res) => {
    categories[req.body.id] = req.body;
    res.send(req.body);
});

router.get('/categories', (req, res) => {
    res.send(categories);
});

router.get('/categories/:id', (req, res) => {
    res.send(categories[req.params.id]);
});

router.put('/categories/:id', (req, res) => {
    let current = categories[req.params.id];

    if (req.body.name) {
        current.name = req.body.name;
    };

    if (req.body.display_name) {
        current.display_name = req.body.display_name;
    };

    if (req.body.description) {
        current.description = req.body.description;
    };


    res.send(categories[req.params.id]);

});

router.delete('/categories/:id', (req, res) => {
    delete categories[req.params.id];
    res.send({'deleted': 'deleted'});
});

module.exports = router;
