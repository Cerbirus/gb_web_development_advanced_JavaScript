const express = require('express');
const fs = require('fs');
const router = express.Router();
const handler = require('./handler');

router.get('/', (req, res) => {
    fs.readFile('server/db/userCart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
        } else {
            res.send(data);
        }
    })
});

router.get('/:id', (req, res) => {
    handler(req, res, 'find', 'server/db/userCart.json');
});

router.post('/', (req, res) => {
    handler(req, res, 'add', 'server/db/userCart.json');
});

router.post('/idproduct/:id', (req, res) => {
    console.log(req);
    res.send("true");
});

router.put('/:id', (req, res) => {
    handler(req, res, 'change', 'server/db/userCart.json');
});

router.delete('/:id', (req, res) => {
    handler(req, res, 'delete', 'server/db/userCart.json');
});

module.exports = router;