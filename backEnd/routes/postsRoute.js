const express = require('express');
const router = express.Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyTokenAndOnlyUser } = require('../middlewares/verifyToken');
const { createPost, getAllPosts, getPostByID, getPostCountCtrl, deletePost } = require('../Controllers/postsController')
const validateUserId = require('../middlewares/validateUserId')
const photoUpload = require('../middlewares/photoUpload')


router.route('/')
    .post(verifyToken, photoUpload.single('image'), createPost)
    .get(getAllPosts)

router.get('/count', verifyTokenAndAdmin, getPostCountCtrl)

router.route('/:id')
    .get(getPostByID)
    .delete(deletePost)


module.exports = router;