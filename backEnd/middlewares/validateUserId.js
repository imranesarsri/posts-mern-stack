const mongoose = require('mongoose');
const { User } = require('../models/User');

module.exports = async (req, res, next) => {
    // Check if the provided ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }

    const userExists = await User.findById(req.params.id);
    // If the user is not found, return a 404 error
    if (!userExists) {
        return res.status(404).json({ message: 'User not found' });
    }

    next();
};