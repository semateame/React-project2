const express = require('express');

const userCommentController = require('../../controller/comments');

const router = express.Router();

router.post('/addcomments', userCommentController.postComments);
router.get('/viewcomments', userCommentController.getComments);


module.exports = router;