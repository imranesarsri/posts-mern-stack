const asyncHandler = require("express-async-handler");
const { Comment, validateCreateComment, validateUpdateComment } = require("../models/Comment");
const { User } = require("../models/User");

/**-----------------------------------------------
 * @desc    Create New Comment
 * @route   /comments
 * @method  POST
 * @access  private (only logged in user)
------------------------------------------------*/
module.exports.createComment = asyncHandler(async (req, res) => {
    const { error } = validateCreateComment(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const profile = await User.findById(req.user.id);

    const comment = await Comment.create({
        postId: req.body.postId,
        text: req.body.text,
        user: req.user.id,
        userName: profile.userName,
    });

    res.status(201).json(comment);
});


/**-----------------------------------------------
 * @desc    Get All Comments
 * @route   /comments
 * @method  GET
 * @access  private (only admin)
------------------------------------------------*/

module.exports.getAllComments = asyncHandler(async (req, res) => {
    const comments = await Comment.find().populate("user");
    res.status(200).json(comments);
});


/**-----------------------------------------------
 * @desc    Delete Comment
 * @route   /comments/:id
 * @method  DELETE
 * @access  private (only admin or owner of the comment)
------------------------------------------------*/

module.exports.deleteComment = asyncHandler(async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
        return res.status(404).json({ message: "comment not found" });
    }

    if (req.user.isAdmin || req.user.id === comment.user.toString()) {
        await Comment.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "comment has been deleted" });
    } else {
        res.status(403).json({ message: "access denied, not allowed" });
    }
});


/**-----------------------------------------------
 * @desc    Update Comment
 * @route   /comments/:id
 * @method  PUT
 * @access  private (only owner of the comment)
------------------------------------------------*/

module.exports.updateComment = asyncHandler(async (req, res) => {
    const { error } = validateUpdateComment(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const comment = await Comment.findById(req.params.id);
    if (!comment) {
        return res.status(404).json({ message: "comment not found" });
    }

    if (req.user.id !== comment.user.toString()) {
        return res.status(403)
            .json({ message: "access denied, only user himself can edit his comment" });
    }

    const updatedComment = await Comment.findByIdAndUpdate(req.params.id, {
        $set: {
            text: req.body.text,
        }
    }, { new: true });

    res.status(200).json(updatedComment);
});