const Product = require('../model/product')
 

// getting proucts 

exports.getProducts = (req, res) => {
    Product.find()
        .sort({ country: -1 })
        .then((result) => {
            res.json(result)
        })
        .catch(err => { console.log('Error', err); })

}

// posting products 

exports.postProducts = (req, res) => {

console.log(req.body)
    const newproduct = new Product({
        price: req.body.price,
        country: req.body.country,
        rate: req.body.rate
    })

    newproduct.save()
        .then((product) => {
            res.json(product)
        })
        .catch(err => console.log('Error', err))

}


exports.deleteProducts = (req, res) => {

    Product.deleteOne(req.params._id)
        .then(() => {
            res.json({ sucess: true })
        })
        .catch(err => res.status(404).send({ sucess: false }))

}

exports.updateProducts = (req, res) => {

    Product.updateOne({ _id: req.params._id }, {
        $set:
        {
            price: req.body.price,
            country: req.body.country,
            rate: req.body.rate
        }
    })
        .then((result) => {
            res.json(result)
        })
        .catch(err => res.status(400).send({ sucess: false }))

}















