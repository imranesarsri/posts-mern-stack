const router = require("express").Router();
const { createCategory, getAllCategories, deleteCategory, } = require("../Controllers/categoriesController");
const { verifyTokenAndAdmin } = require('../middlewares/verifyToken');
const { validateObjectID, } = require('../middlewares/validateUserId')

// /categories
router
    .route("/")
    .post(verifyTokenAndAdmin, createCategory)
    .get(getAllCategories);

// /categories/:id
router
    .route("/:id")
    .delete(validateObjectID, verifyTokenAndAdmin, deleteCategory);

module.exports = router;