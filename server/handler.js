const cart = require('./cart');
const fs = require('fs');

const actions = {
    add: cart.add,
    change: cart.change,
    delete: cart.deleteElem,
    find: cart.find
};

let handler = (req, res, action, file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
        } else {
            console.log(`action: `, action, req.params);
            if (action === 'find') {
                let cartItem = actions[action](JSON.parse(data), req);
                res.send(JSON.stringify({ result: cartItem !== undefined, cartItem: cartItem }))
            }
            else {
                let newCart = actions[action](JSON.parse(data), req);
                fs.writeFile(file, newCart, (err) => {
                    if (err) {
                        res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
                    } else {
                        res.send(JSON.stringify({ result: 1 }))
                    }
                })
            }
        }
    })
};

module.exports = handler;