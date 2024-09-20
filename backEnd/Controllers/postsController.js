const { Post, validationCreatePost, validationUpdatePost } = require('../models/Post');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const path = require('path');
const { cloudinaryUploadImage, cloudinaryRemoveImage } = require('../utils/cloudinary')
const fs = require('fs')



/** ----------------------------------------------------------------- 
 * @desc create new post
 * @route /posts/
 * @method POST 
 * @access private (only admin)
    ---------------------------------------------------------------- */

const createPost = asyncHandler(async (req, res) => {

    // 1. Validation for image
    if (!req.file) {
        return res.status(400).json({ message: 'no file provided' })
    }

    // 2. Validation for data
    const { error } = validationCreatePost(req.body)
    if (error) {
        return res.status(400).json({ message: error.message });
    }

    // 3. Upload image 
    const imagePath = path.join(__dirname, `../upload/${req.file.filename}`)
    // Upload to cloudinary
    const result = await cloudinaryUploadImage(imagePath)

    // 4. Create new post and save to DB
    const post = await Post.create({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        user: req.user.id,
        image: {
            url: result.secure_url,
            publicID: result.public_id
        }
    })

    // 5. Send requise to the client 
    res.status(201).json(post)

    // 6. Remove image from the server
    fs.unlinkSync(imagePath)
})


/** ----------------------------------------------------------------- 
 * @desc Get all posts
 * @route /posts/
 * @method GET 
 * @access public
    ---------------------------------------------------------------- */

const getAllPosts = asyncHandler(async (req, res) => {

    const POST_BY_PAGE = 4
    const { pageNumber, category } = req.query
    let posts

    if (pageNumber && category) {
        posts = await Post
            .find({ category })
            .skip((pageNumber - 1) * POST_BY_PAGE)
            .limit(POST_BY_PAGE)
            .sort({ createdAt: -1 })
            .populate('user', ['-password', '-isAdmin'])
    } else if (pageNumber) {
        posts = await Post
            .find()
            .sort({ createdAt: -1 })
            .skip((pageNumber - 1) * POST_BY_PAGE)
            .limit(POST_BY_PAGE)
            .sort({ createdAt: -1 })
            .populate('user', ['-password', '-isAdmin'])
    } else if (category) {
        posts = await Post
            .find({ category })
            .sort({ createdAt: -1 })
            .populate('user', ['-password', '-isAdmin'])
    } else {
        posts = await Post
            .find()
            .sort({ createdAt: -1 })
            .populate('user', ['-password', '-isAdmin'])
    }

    res.status(200).json(posts)
})


/** ----------------------------------------------------------------- 
 * @desc Get post by id
 * @route /posts/:id
 * @method GET 
 * @access public
    ---------------------------------------------------------------- */

const getPostByID = asyncHandler(async (req, res) => {
    const ID = req.params.id

    const post = await Post
        .findById(ID)
        .populate('user', ['-password', '-isAdmin'])

    if (!post) {
        return res.status(404).json({ message: 'post not found' })
    }

    res.status(200).json(post)

})


/** ----------------------------------------------------------------- 
 * @desc Get post Count
 * @route /posts/count
 * @method GET 
 * @access private
    ---------------------------------------------------------------- */

const getPostCountCtrl = asyncHandler(async (req, res) => {

    const count = await Post.countDocuments();
    return res.status(200).json(count);
})


/** ----------------------------------------------------------------- 
 * @desc delete post by id
 * @route /posts/:id
 * @method DELETE 
 * @access private (only andmin or owner of the post)
    ---------------------------------------------------------------- */

const deletePost = asyncHandler(async (req, res) => {
    const ID = req.params.id

    const post = await Post.findById(ID)

    if (!post) {
        return res.status(404).json({ message: 'post not found' })
    }

    // check if this post belong to logged or AMDIN 
    if (req.user.isAdmin || req.user.id === post.user.toString()) {

        await Post.findByIdAndDelete(ID)
        await cloudinaryRemoveImage(post.image.publicID)

        // TODO Delete all comments that belong to this post

        res.status(200).json({
            message: 'Post has been deleted successfully',
            postID: post._id
        })

    } else {
        return res.status(403).json({ message: 'access denied, forbidden' })
    }
})


/** ----------------------------------------------------------------- 
 * @desc Update post
 * @route /posts/:id
 * @method PUT 
 * @access private (only owner of the post)
    ---------------------------------------------------------------- */

const updatePost = asyncHandler(async (req, res) => {

    const ID = req.params.id

    // 1. Validation for data
    const { error } = validationUpdatePost(req.body)
    if (error) {
        return res.status(400).json({ message: error.message });
    }

    // 2. Get the post from DB and check if post exist
    const post = await Post.findById(ID)

    if (!post) {
        return res.status(400).json({ message: 'Post mot found' });
    }

    // 3. check if this post belong to logged or AMDIN 
    if (req.user.id !== post.user.toString()) {
        return res.status(403).json({ message: 'access denied, forbidden' });
    }

    // 4. Update post 
    const updatePost = await Post.findByIdAndUpdate(ID, {
        $set: {
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
        }
    },
        { new: true }).populate('user', ['-password', '-isAdmin'])

    // 5. Send requise to the client 
    res.status(200).json(updatePost)
})


/** ----------------------------------------------------------------- 
 * @desc Update post image
 * @route /posts/upload-image/:id
 * @method PUT 
 * @access private (only owner of the post)
    ---------------------------------------------------------------- */

const updateImagePost = asyncHandler(async (req, res) => {

    const ID = req.params.id

    // 1. Validation for image
    if (!req.file) {
        return res.status(400).json({ message: 'no file provided' });
    }

    // 2. Get the post from DB and check if post exist
    const post = await Post.findById(ID)

    if (!post) {
        return res.status(400).json({ message: 'Post not found' });
    }

    // 3. check if this post belong to logged or AMDIN 
    if (req.user.id !== post.user.toString()) {
        return res.status(403).json({ message: 'access denied, forbidden' });
    }

    // 4. Delete if exist old post image 
    const publicID = post.image.publicID
    if (publicID) {
        await cloudinaryRemoveImage(publicID)
    }

    // 5. Upload new post image 
    const imagePath = path.join(__dirname, `../upload/${req.file.filename}`)
    const result = await cloudinaryUploadImage(imagePath)

    // 6. Update the image field in the DB
    const updatePostImage = await Post.findByIdAndUpdate(ID, {
        $set: {
            image: {
                url: result.secure_url,
                publicID: result.public_id
            }
        }
    },
        { new: true }).populate('user', ['-password', '-isAdmin'])

    // 7. Send requise to the client 
    res.status(200).json(updatePostImage)

    // 8. Remove image from the server
    fs.unlinkSync(imagePath)
})


module.exports = {
    createPost,
    getAllPosts,
    getPostByID,
    getPostCountCtrl,
    deletePost,
    updatePost,
    updateImagePost
}