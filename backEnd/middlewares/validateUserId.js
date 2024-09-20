const mongoose = require('mongoose');
const { User } = require('../models/User');

// Middleware to validate MongoDB ObjectId
const validateObjectID = (req, res, next) => {
    const ID = req.params.id;

    // Check if the provided ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(ID)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }

    next(); // Proceed to the next middleware if ID is valid
};

// Middleware to validate the user based on ID
const validateUserID = async (req, res, next) => {
    const ID = req.params.id;

    // Validate ObjectId before querying the database
    validateObjectID(req, res, async () => {
        try {
            const userExists = await User.findById(ID);

            // If the user is not found, return a 404 error
            if (!userExists) {
                return res.status(404).json({ message: 'User not found' });
            }

            next(); // Proceed to the next middleware if user exists
        } catch (error) {
            return res.status(500).json({ message: 'Server error', error });
        }
    });
};

module.exports = {
    validateObjectID,
    validateUserID
};
