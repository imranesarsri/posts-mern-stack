const express = require('express');
const router = express.Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyTokenAndOnlyUser } = require('../middlewares/verifyToken');
const { createPost, getAllPosts, getPostByID, getPostCountCtrl, deletePost, updatePost, updateImagePost } = require('../Controllers/postsController')
const { validateObjectID, validateUserID } = require('../middlewares/validateUserId')
const photoUpload = require('../middlewares/photoUpload')

/**
 * Create new post
 * Get all posts
 */
router.route('/')
    .post(verifyToken, photoUpload.single('image'), createPost)
    .get(getAllPosts)

// Get post count
router.get('/count', verifyTokenAndAdmin, getPostCountCtrl)

// Update post image
router.put('/upload-image/:id', validateObjectID, verifyToken, photoUpload.single('image'), updateImagePost)

/**
 * Get post by ID
 * Delete post by ID
 * Update post by ID
 */
router.route('/:id')
    .get(getPostByID)
    .delete(validateObjectID, verifyToken, deletePost)
    .put(validateObjectID, verifyToken, updatePost)


module.exports = router;