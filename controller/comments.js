const Comment = require("../model/comments");

// posting comments 

exports.postComments = (req, res, next) => {

        const newComments = new Comment({
            content: req.body.content,
            email:req.body.email
            
        })
    
        newComments.save()
            .then((comment) => {
                res.json(comment)
            })
            .catch(err => console.log('Error', err))
    
    }
    

    // getting proucts 

exports.getComments = (req, res) => {
    Comment.find()
        .sort({ comment_date: -1 })
        .then((result) => {
            res.json(result)
        })
        .catch(err => { console.log('Error', err); })

}