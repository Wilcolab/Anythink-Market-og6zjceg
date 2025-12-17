/**
 * Express router for handling comment-related API endpoints.
 * @module routes/api/comments
 * @requires express
 * @requires mongoose
 */

/**
 * Retrieves all comments from the database.
 * @async
 * @route GET /
 * @returns {Object[]} Array of comment objects
 * @throws {Error} Returns 500 status with error message if fetch fails
 */

/**
 * Deletes a comment by its ID.
 * @async
 * @route DELETE /:id
 * @param {string} req.params.id - The comment ID to delete
 * @returns {Object} Success message upon deletion
 * @throws {Error} Returns 404 status if comment not found
 * @throws {Error} Returns 500 status if deletion fails
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

//add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
  try {
    const commentId = req.params.id;
    const deletedComment = await Comment.findByIdAndDelete(commentId);
    if (!deletedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});