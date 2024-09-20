const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken')


const UserSchema = mongoose.Schema({
    userName: {
        type: String,
        require: true,
        trim: true,
        minlenght: 3,
        maxlight: 100,
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        minlenght: 5,
        maxlight: 100,
    },
    password: {
        type: String,
        require: true,
        trim: true,
        minlenght: 8,
    },
    profilePhoto: {
        type: Object,
        default: {
            url: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
            publicID: null
        },
    },
    bio: String,
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

// Populate Posts That Belongs To This User When he/she Get his/her Profile
UserSchema.virtual("posts", {
    ref: "Post",
    foreignField: "user",
    localField: "_id",
});

// Create token
UserSchema.methods.generateToken = function () {
    return jwt.sign({ id: this._id, isAdmin: this.isAdmin }, process.env.JWT_SECRET_KEY, { expiresIn: '30d' });
}

const User = mongoose.model('User', UserSchema)


// Validation Register User
function validationRegisterUser(obj) {
    const schema = Joi.object({
        userName: Joi.string().trim().min(3).max(100).required(),
        email: Joi.string().trim().min(3).max(100).required().email(),
        password: Joi.string().trim().min(8).required(),
    })
    return schema.validate(obj)
}

// Validation Login User
function validationLoginUser(obj) {
    const schema = Joi.object({
        email: Joi.string().trim().min(3).max(100).required().email(),
        password: Joi.string().trim().min(8).required(),
    })
    return schema.validate(obj)
}

// Validation Update User
function validationUpdateUser(obj) {
    const schema = Joi.object({
        userName: Joi.string().trim().min(3).max(100),
        email: Joi.string().trim().min(3).max(100).email(),
        password: Joi.string().trim().min(8),
        bio: Joi.string(),
    })
    return schema.validate(obj)
}

module.exports = {
    User,
    validationRegisterUser,
    validationLoginUser,
    validationUpdateUser
}
