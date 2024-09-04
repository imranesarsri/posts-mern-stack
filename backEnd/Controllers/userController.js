const { User, validationUpdateUser } = require('../models/User');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');


/** ----------------------------------------------------------------- 
 * @desc get all users
 * @route /
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
 * @route /is
 * @method GET 
 * @access private (only user himself)
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
 * @route /count
 * @method GET 
 * @access private (only admin)
    ---------------------------------------------------------------*/

const getUsersCountCtrl = asyncHandler(
    async (req, res) => {
        // Use countDocuments() to count the documents
        const count = await User.countDocuments();
        return res.status(200).json({ count });
    }
);


/**----------------------------------------------------------------- 
 * @desc Profile photo upload
 * @route /profile-photo-upload
 * @method GOST 
 * @access private (only logged in user)
    ---------------------------------------------------------------*/

const profilePhotoUpload = asyncHandler(
    async (req, res) => {

        if (!req.file) {
            return res.status(400).json({ message: 'no file provided' });

        }
        return res.status(200).json({ message: 'Your profile photo updated successfull' });
    }
);


/** ----------------------------------------------------------------- 
 * @desc Update user
 * @route /:id
 * @method PUT 
 * @access private
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
 * @desc delete user
 * @route /:id
 * @method DELETE 
 * @access private
    ---------------------------------------------------------------- */

const deleteUser = asyncHandler(
    async (req, res) => {
        const ID = req.params.id
        const user = await User.findById(ID)
        if (user) {
            await User.findByIdAndDelete(user)
            return res.status(200).json({ message: "Deleted successfull" });
        } else {
            return res.status(404).json({ message: error.message });

        }
    }
)


module.exports = {
    getAllUsers,
    getUser,
    getUsersCountCtrl,
    profilePhotoUpload,
    updateUser,
    deleteUser
}