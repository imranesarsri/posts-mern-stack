const express = require('express');
const router = express.Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyTokenAndOnlyUser } = require('../middlewares/verifyToken');
const { getAllUsers, getUser, getUsersCountCtrl, profilePhotoUpload, updateUser, deleteUserProfile } = require('../Controllers/usersController')
const { validateUserID } = require('../middlewares/validateUserId')
const photoUpload = require('../middlewares/photoUpload')


// Get All Users
router.get('/', verifyTokenAndAdmin, getAllUsers)

// Get count users
router.get('/count', verifyTokenAndAdmin, getUsersCountCtrl)

// Update profile photo
router.post('/profile-photo-upload', verifyToken, photoUpload.single('image'), profilePhotoUpload)

/**
 * Get User By ID
 * Updated User
 * Deleted User
 */
router.route('/:id')
    .get(validateUserID, getUser)
    .put(validateUserID, verifyTokenAndOnlyUser, updateUser)
    .delete(validateUserID, verifyTokenAndAuthorization, deleteUserProfile)

module.exports = router;
