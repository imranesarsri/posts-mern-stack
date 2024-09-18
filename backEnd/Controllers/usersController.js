const { User, validationUpdateUser } = require('../models/User');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const path = require('path');
const { cloudinaryUploadImage, cloudinaryRemoveImage } = require('../utils/cloudinary')
const fs = require('fs')

/** ----------------------------------------------------------------- 
 * @desc get all users
 * @route /users/
 * @method GET 
 * @access private (only admin)
    ---------------------------------------------------------------- */

const getAllUsers = asyncHandler(
    async (req, res) => {
        const allUsers = await User.find().sort({ userName: 1 }).select('-password -isAdmin')
        return res.status(200).json(allUsers)
    }
)


/** ----------------------------------------------------------------- 
 * @desc get user profile
 * @route /users/:id
 * @method GET 
 * @access public
    ---------------------------------------------------------------- */

const getUser = asyncHandler(
    async (req, res) => {
        const { id } = req.params;

        // Find the user by ID, excluding the password and isAdmin fields
        const user = await User.findById(id).select('-password -isAdmin');

        // If the user is found, return a 200 status with the user data
        return res.status(200).json(user);
    }
)


/**----------------------------------------------------------------- 
 * @desc get users count
 * @route /users/count
 * @method GET 
 * @access private (only admin)
    ---------------------------------------------------------------*/

const getUsersCountCtrl = asyncHandler(
    async (req, res) => {
        // Use countDocuments() to count the documents
        const count = await User.countDocuments();
        return res.status(200).json(count);
    }
);


/**----------------------------------------------------------------- 
 * @desc Profile photo upload
 * @route /profile-photo-upload
 * @method POST 
 * @access private (only logged in user)
    ---------------------------------------------------------------*/

const profilePhotoUpload = asyncHandler(
    async (req, res) => {

        // Validation
        if (!req.file) {
            return res.status(400).json({ message: 'no file provided' });
        }

        // Get the path to the client
        const imagePath = path.join(__dirname, `../upload/profileImages/${req.file.filename}`)
        // console.log(imagePath)

        // Upload to cloudinary
        const result = await cloudinaryUploadImage(imagePath)
        // console.log(result)

        // Get the User From DB
        const user = await User.findById(req.user.id)

        // Delete the old profile photo if existe
        const profilePhotoID = user.profilePhoto.publicID
        if (profilePhotoID !== null) {
            await cloudinaryRemoveImage(profilePhotoID)
        }

        // Change the profilePhoto field in DB
        user.profilePhoto = {
            url: result.secure_url,
            publicID: result.public_id
        }
        await user.save()

        // Send response to client
        res.status(200).json(
            {
                message: 'Your profile photo updated successfull',
                profilePhoto: {
                    url: result.secure_url,
                    publicID: result.public_id
                }
            }
        );

        // Remove image from the server
        fs.unlinkSync(imagePath)
    }
);


/** ----------------------------------------------------------------- 
 * @desc Update user
 * @route /users/:id
 * @method PUT 
 * @access private (Only user himself)
    --------------------------------------------------------------- */

const updateUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { email } = req.body;

    // Validate the request body
    const { error } = validationUpdateUser(req.body);
    if (error) {
        return res.status(400).json({ message: error.message });
    }

    // Hash password if it is provided
    if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    // Check if the email is already in use by another user
    const emailExiste = await User.findOne({ email });
    if (emailExiste && emailExiste._id.toString() !== id) {
        return res.status(400).json({ message: 'This email is already in use by another user' });
    }

    // Update the user with the new details
    const userUpdate = await User.findByIdAndUpdate(
        id,
        {
            $set: {
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password,
                // profilePhoto: req.body.profilePhoto,
                bio: req.body.bio,
            },
        },
        { new: true }
    ).select('-password -isAdmin');

    return res.status(200).json(userUpdate);
});


/** ----------------------------------------------------------------- 
 * @desc delete user profile (Account)
 * @route /users/:id
 * @method DELETE 
 * @access private (only admin or user himself)
    ---------------------------------------------------------------- */

const deleteUserProfile = asyncHandler(
    async (req, res) => {

        // 1. Get the user from DB
        const ID = req.params.id
        const user = await User.findById(ID)

        //TODO 2. Get all posts from DB
        //TODO 3. Get the public ids from the posts
        //TODO 4. Delete all posts image from cloudinary that belong to this user


        // 5. Delete the profile picture from cloudinary
        const profilePhotoID = user.profilePhoto.publicID
        await cloudinaryRemoveImage(profilePhotoID)

        //TODO - 6. Delete user posts & comments

        // 7. Delete the user himself
        await User.findByIdAndDelete(ID)

        // 8. Send a response to the client
        return res.status(200).json({ message: "your profile has been deleted" });

    }
)


module.exports = {
    getAllUsers,
    getUser,
    getUsersCountCtrl,
    profilePhotoUpload,
    updateUser,
    deleteUserProfile
}