let add = (cart, req) => {
    cart.contents.push(req.body);
    updateTotals(cart);
    return JSON.stringify(cart, null, 4);
};

let change = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    updateTotals(cart);
    return JSON.stringify(cart, null, 4);
};

let deleteElem = (cart, req) => {
    const index = cart.contents.findIndex(el => el.id_product === +req.params.id);
    if (index > -1) {
        cart.contents.splice(index, 1);
        updateTotals(cart);
    }
    return JSON.stringify(cart, null, 4);
};

let updateTotals = (cart) => {
    cart.amount = 0;
    cart.countGoods = 0;
    cart.contents.forEach(element => {
        cart.countGoods += element.quantity;
        cart.amount += element.quantity * element.price;
    });
};

let find = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    return find;
};

module.exports = {
    add,
    change,
    deleteElem,
    find
};