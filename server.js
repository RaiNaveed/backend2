const express = require ('express');
const cors = require('cors')
const app = express();
const port=8494
const DataBaseConnection = require('./controller/configration/database-configration')

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.text());
app.use(express.raw());
app.use(cors());
// accquring my routes
const productmanagementroute = require('./route/productmanagmentroute');
app.use('/productmanagement',productmanagementroute);
//  accquring my routes


app.listen(port,()=>{
    console.log(`your application has been lounched from port % ${port} `)
})