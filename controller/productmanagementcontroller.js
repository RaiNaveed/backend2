const productmodel = require('./models/productmanagementmodel')
const productdata =async (req, res)=>{
    try {
        const {productname, productprice } = req.Body;
        const doctocreat =new productmodel({
            productname,
            productprice

        })
         const doctosave=await doctocreat.save();
        res.json({
            Message:'you have reaches API end Point',
            Body:doctosave

        })
    } catch (error) {
        res.json({
            message:error.message,
            Body:null
        })
    }
}


module.exports= {
    productdata
}