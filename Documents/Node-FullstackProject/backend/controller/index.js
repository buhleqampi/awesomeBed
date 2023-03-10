const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const route = express.Router();
const {User, Product} = require('../model');
const user = new User();
const product = new Product();

route.get('^/$|/node', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
})

// =====Users========
// Login
route.post('/login', bodyParser.json(), (req, res)=>{
    user.login(req, res);
})
// Retrieve all users
route.get('/users', (req, res)=>{
    user.fetchUsers(req, res);
});
//  Retrieve an user
route.get('/user/:id', (req, res)=>{
    user.fetchUser(req, res);
});
// Update an user
route.put('/user/:id',bodyParser.json(), (req, res)=>{
    user.updateUser(req, res);
});
// Register an user
route.post('/register', bodyParser.json(), (req, res)=> {
    user.createUser(req, res);
})
// Delete an user
route.delete('/user/:id', (req, res)=>{
    user.deleteUser(req, res);
});
// =====Products======
// Fetch all products
route.get('/products', (req, res)=> {
    product.fetchProducts(req, res);
})
// Fetch a single product
route.get('/product/:id', 
(req, res)=> {
    product.fetchProduct(req, res);
})
// Add a new product
route.post('/product', 
bodyParser.json(), 
(req, res)=> {
    product.addProduct(req, res);
})
// Update a product
route.put('/product/:id', 
bodyParser.json(),
(req, res)=> {
    product.updateProduct(req, res);
})
// Delete a product
route.delete('/product/:id', 
(req, res)=> {
    product.deleteProduct(req, res);
})

module.exports = route;

