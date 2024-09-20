const router = require("express").Router();
const { createComment, getAllComments, deleteComment, updateComment, } = require('../Controllers/commentsController')
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyTokenAndOnlyUser } = require('../middlewares/verifyToken');
const { validateObjectID, validateUserID } = require('../middlewares/validateUserId')
const photoUpload = require('../middlewares/photoUpload')


// /comments
router
    .route("/")
    .post(verifyToken, createComment)
    .get(verifyTokenAndAdmin, getAllComments);

// /comments/:id
router.route("/:id")
    .delete(validateObjectID, verifyToken, deleteComment)
    .put(validateObjectID, verifyToken, updateComment);


module.exports = router;