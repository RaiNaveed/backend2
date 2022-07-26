const productdata = (req, res)=>{
    try {
        console.log(req.body)
        res.json({
            Message:'you have reaches API end Point',
            Body:req.Body

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