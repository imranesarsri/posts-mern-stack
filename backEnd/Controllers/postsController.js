const { Post, validationCreatePost } = require('../models/Post');
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
    const imagePath = path.join(__dirname, `../upload/blogImages/${req.file.filename}`)
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

    //! 6. Remove image from the server
    fs.unlinkSync(imagePath)
})


module.exports = {
    createPost
}