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
        maxlength: 500,
    },
    backgroundImage: {
        type: Object,
        default: {
            url: 'https://example.com/default-background.jpg',
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
