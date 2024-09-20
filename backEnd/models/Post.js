const mongoose = require('mongoose');
const Joi = require('joi');


const PostSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
        trim: true,
        minlenght: 2,
        maxlight: 200,
    },
    description: {
        type: String,
        require: true,
        trim: true,
        minlenght: 5,
        maxlight: 5000,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    category: {
        type: String,
        trim: true,
        require: true,
    },
    image: {
        type: Object,
        default: {
            url: '',
            publicID: null,
        }
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

// Populate Comment for this post
PostSchema.virtual("comments", {
    ref: "Comment",
    foreignField: "postId",
    localField: "_id",
});


const Post = mongoose.model('Post', PostSchema)




// Validation create Post
function validationCreatePost(obj) {
    const schema = Joi.object({
        title: Joi.string().trim().min(2).max(200).required(),
        description: Joi.string().trim().min(5).max(5000).required(),
        category: Joi.string().trim().required(),
    })
    return schema.validate(obj)
}

// Validation create Post
function validationUpdatePost(obj) {
    const schema = Joi.object({
        title: Joi.string().trim().min(2).max(200),
        description: Joi.string().trim().min(5).max(5000),
        category: Joi.string().trim(),
    })
    return schema.validate(obj)
}

module.exports = {
    Post,
    validationCreatePost,
    validationUpdatePost
}
