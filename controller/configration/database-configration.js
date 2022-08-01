// const package=require('../configration/package.json');
const mongoose=require('mongoose');
const package = require('../package.json')


mongoose.connect('mongodb+srv://e-comm123:e-comm123@cluster0e-coomerce.htcsc.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true , useUnifiedTopology: true}, (error,connection)=>{
    if(!error){
    console.log(`\nMongoDb connected successfully at mongoatlas with database name humaniodic\n'`);
    console.log(`your app ha the following dependcies\n`);
    for(dependencies in package.dependencies){
        console.log(dependencies)
    }
  }
  else{console.log('error:not connected to the mongodb' + error)}
});