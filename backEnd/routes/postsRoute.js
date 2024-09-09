const express = require('express');
const router = express.Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyTokenAndOnlyUser } = require('../middlewares/verifyToken');
const { createPost } = require('../Controllers/postsController')
const validateUserId = require('../middlewares/validateUserId')
const photoUpload = require('../middlewares/photoUpload')


router.post('/', verifyToken, photoUpload.single('image'), createPost)


module.exports = router;