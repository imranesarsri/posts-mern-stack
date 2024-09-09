const express = require('express');
const router = express.Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyTokenAndOnlyUser } = require('../middlewares/verifyToken');
const { getAllUsers, getUser, getUsersCountCtrl, profilePhotoUpload, updateUser, deleteUserProfile } = require('../controllers/userController')
const validateUserId = require('../middlewares/validateUserId')
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
    .get(validateUserId, getUser)
    .put(validateUserId, verifyTokenAndOnlyUser, updateUser)
    .delete(validateUserId, verifyTokenAndAuthorization, deleteUserProfile)

module.exports = router;
