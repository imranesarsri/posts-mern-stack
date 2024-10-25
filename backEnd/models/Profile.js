// Profile.js
const mongoose = require('mongoose');

// Profile Schema
const ProfileSchema = mongoose.Schema({
    city: {
        type: String,
        trim: true,
        maxlength: 100,
    },
    country: {
        type: String,
        trim: true,
        maxlength: 100,
    },
    description: {
        type: String,
        trim: true,
        maxlength: 1000,
    },
    backgroundImage: {
        type: Object,
        default: {
            url: '/images/sections/profile/profileBackground.svg',
            publicID: null,
        },
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User schema
    }
}, {
    timestamps: true,
});

// Export the Profile model
const Profile = mongoose.model('Profile', ProfileSchema);
module.exports = Profile;
