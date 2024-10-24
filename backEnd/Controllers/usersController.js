const { User, validationUpdateUser } = require('../models/User');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const path = require('path');
const { cloudinaryUploadImage, cloudinaryRemoveImage, cloudinaryRemoveMultipleImage } = require('../utils/cloudinary')
const fs = require('fs')
const { Comment } = require("../models/Comment");
const { Post } = require('../models/Post');
const Profile = require('../models/Profile');


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
        const user = await User.findById(id)
            .select('-password -isAdmin')
            .populate('posts')
            .populate('profile');  // Populating the profile field

        // If the user is found, return a 200 status with the user data
        if (user) {
            return res.status(200).json(user);
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    }
);


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
        const imagePath = path.join(__dirname, `../upload/${req.file.filename}`)
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



/**----------------------------------------------------------------- 
 * @desc Profile background image upload
 * @route /profile-background-image-upload
 * @method POST 
 * @access private (only logged in user)
    ---------------------------------------------------------------*/

const profileBackgroundImageUpload = asyncHandler(
    async (req, res) => {

        // Validation: check if the file exists
        if (!req.file) {
            return res.status(400).json({ message: 'No file provided' });
        }

        // Get the path to the uploaded image
        const imagePath = path.join(__dirname, `../upload/${req.file.filename}`);

        // Upload the image to Cloudinary
        const result = await cloudinaryUploadImage(imagePath);

        // Get the User from the DB
        const user = await User.findById(req.user.id).populate('profile');

        // Ensure that the profile exists
        if (!user.profile) {
            return res.status(404).json({ message: 'User profile not found' });
        }

        // Delete the old background image if it exists
        const backgroundImageID = user.profile.backgroundImage?.publicID;
        if (backgroundImageID) {
            await cloudinaryRemoveImage(backgroundImageID);
        }

        // Update the backgroundImage field in the profile schema
        user.profile.backgroundImage = {
            url: result.secure_url,
            publicID: result.public_id
        };

        // Save the updated profile
        await user.profile.save();

        // Send response to the client
        res.status(200).json({
            message: 'Your background image was updated successfully',
            backgroundImage: {
                url: result.secure_url,
                publicID: result.public_id
            }
        });

        // Remove the uploaded image from the server
        fs.unlinkSync(imagePath);
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
    const { userName, bio, city, country, description } = req.body;

    // Validate the request body for user details
    const { error } = validationUpdateUser({ userName });
    if (error) {
        return res.status(400).json({ message: error.message });
    }

    // Find the user and update their User information
    const userUpdate = await User.findByIdAndUpdate(
        id,
        {
            $set: {
                userName: userName,
                // email: email,
                // password: hashedPassword || undefined, // Only update if password is provided
                bio: bio,
            },
        },
        { new: true }
    ).select('-password -isAdmin');

    if (!userUpdate) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Find the associated profile and update Profile information
    const profileUpdate = await Profile.findOneAndUpdate(
        { user: id }, // Reference the user by their ID in the Profile schema
        {
            $set: {
                city: city || undefined,
                country: country || undefined,
                description: description || undefined,
            },
        },
        { new: true }
    );

    if (!profileUpdate) {
        profileUpdate = await Profile.create({
            user: id,
            city: city || undefined,
            country: country || undefined,
            description: description || undefined,
        })
    }

    return res.status(200).json({
        user: userUpdate,
        profile: profileUpdate
    });
});


/** ----------------------------------------------------------------- 
 * @desc update email user profile (Account)
 * @route /users/updateEmail/:id
 * @method PUT 
 * @access private (Only user himself)
    ---------------------------------------------------------------- */

const UpdateEmailProfile = asyncHandler(
    async (req, res) => {
        // Check if the email is already in use by another user
        // const emailExiste = await User.findOne({ email });
        // if (emailExiste && emailExiste._id.toString() !== id) {
        //     return res.status(400).json({ message: 'This email is already in use by another user' });
        // }
    })


/** ----------------------------------------------------------------- 
 * @desc update email user profile (Account)
 * @route /users/updateEmail/:id
 * @method PUT 
 * @access private (Only user himself)
    ---------------------------------------------------------------- */

const UpdatePasswordProfile = asyncHandler(
    async (req, res) => {
        // Hash password if it is provided
        // let hashedPassword;
        // if (password) {
        //     const salt = await bcrypt.genSalt(10);
        //     hashedPassword = await bcrypt.hash(password, salt);
        // }
    })


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

        // 2. Get all posts from DB
        const posts = await Post.find({ user: user._id })

        // 3. Get the public ids from the posts
        const publicIds = posts?.map((post) => post.image.publicID)

        // 4. Delete all posts image from cloudinary that belong to this user
        if (publicIds?.length > 0) {
            await cloudinaryRemoveMultipleImage(publicIds)
        }

        // 5. Delete the profile picture from cloudinary
        const profilePhotoID = user.profilePhoto.publicID
        await cloudinaryRemoveImage(profilePhotoID)

        // 6. Delete user posts & comments
        await Post.deleteMany({ user: user._id })
        await Comment.deleteMany({ user: user._id })

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
    profileBackgroundImageUpload,
    updateUser,
    deleteUserProfile
}