//dependencies

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltrounds = 10

//date

const today= new Date();
const day = today.getDate();
const month = today.getMonth()+1;
const year = today.getFullYear();
const time = today.getTime();

//start block Schema creating

const productschema = mongoose.Schema({
    productname:{type:String,require:true},
    productprice:{type:Number,require:true},
    email:{type:String,require:true , unique:true},
    Password:{type:String,require:true},
    Saltstring:{type:String},
    realpassword:{type:String},
    Status:{type:Number,default:1},
    creatdata:{
        type:String,
        default:`${year}-${month}-${day}-{time}`
    }
})

//exporting thr schema

module.exports=mongoose.model('productcollection',productschema)
