const express = require('express');
const Router = express.Router();

// calling my controller

const { productdata } = require('../controller/productmanagementcontroller');
Router.post('/productmanagement', productdata)

module.exports= Router;