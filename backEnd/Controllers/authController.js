const { User, validationRegisterUser, validationLoginUser } = require('../models/User')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs');


/** 
 * @desc Register new user
 * @route /auth/register
 * @method POST 
 * @access public
 */

const register = asyncHandler(async (req, res) => {

    // Validation
    const { error } = validationRegisterUser(req.body);
    if (error) {
        return res.status(400).json({ message: error.message });
    }

    // Is user already existe 
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).json({ message: 'The user is already registered' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);

    // Create user and Save in to  DB
    const newUser = new User(req.body);
    const result = await newUser.save();

    // Create token
    const token = newUser.generateToken()
    const { password, isAdmin, ...other } = result._doc;

    // Send a response to client
    return res.status(201).json({ ...other, token });
})


/** 
 * @desc Login user
 * @route /auth/login
 * @method POST 
 * @access public
 */

const login = asyncHandler(async (req, res) => {

    // Validatio
    const { error } = validationLoginUser(req.body)
    if (error) {
        return res.status(400).json({ message: error.message })
    }

    // IS user existe
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.status(400).json({ message: 'Invalid email' })
    }

    // Validation password
    const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)
    if (!isPasswordMatch) {
        return res.status(400).json({ message: 'Invalid password' })
    }

    // generate token
    const token = user.generateToken()
    const { password, isAdmin, ...other } = user._doc;

    // Send a response to client
    return res.status(201).json({ ...other, token })
}
)


module.exports = {
    register,
    login
}