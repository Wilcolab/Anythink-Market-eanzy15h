/**
 * @module routes/api/comments
 * @description
 * Express router providing CRUD endpoints for Comment resources.
 *
 * Exposed routes:
 *  - GET    /api/comments         -> list all comments
 *  - GET    /api/comments/:id     -> get a comment by id
 *  - POST   /api/comments         -> create a new comment
 *  - PUT    /api/comments/:id     -> update a comment by id
 *  - DELETE /api/comments/:id     -> delete a comment by id
 *
 * The router uses the Mongoose "Comment" model (mongoose.model('Comment')).
 */

/**
 * @typedef {Object} CommentDocument
 * @description Mongoose document representing a Comment. Fields depend on the Comment schema.
 * @property {string} [_id]        - Document id (ObjectId as string)
 * @property {Date}   [createdAt]  - Creation timestamp (if schema uses timestamps)
 * @property {Date}   [updatedAt]  - Update timestamp (if schema uses timestamps)
 * @property {Object} [other]      - Other schema-defined fields for a comment (text, author, etc.)
 */

/**
 * GET /api/comments
 * @name GetComments
 * @route {GET} /api/comments
 * @summary Retrieve all comments.
 * @param {import("express").Request} req - Express request object.
 * @param {import("express").Response} res - Express response object.
 * @returns {Promise<void>} Responds with 200 and an array of CommentDocument on success.
 * @returns {Object} res.body - On success: array of CommentDocument.
 * @returns {Object} res.status(500).json - On error: { error: string }.
 */

/**
 * GET /api/comments/:id
 * @name GetCommentById
 * @route {GET} /api/comments/:id
 * @summary Retrieve a single comment by its id.
 * @param {import("express").Request} req - Express request object. req.params.id should be a MongoDB ObjectId string.
 * @param {import("express").Response} res - Express response object.
 * @returns {Promise<void>} Responds with:
 *   - 200 and the CommentDocument if found,
 *   - 400 and { error: string } if the id is invalid,
 *   - 404 and { error: string } if no comment was found,
 *   - 500 and { error: string } on server error.
 */

/**
 * POST /api/comments
 * @name CreateComment
 * @route {POST} /api/comments
 * @summary Create a new comment.
 * @param {import("express").Request} req - Express request object. Request body should contain the fields required by the Comment schema.
 * @param {import("express").Response} res - Express response object.
 * @returns {Promise<void>} Responds with:
 *   - 201 and the created CommentDocument on success,
 *   - 400 and { error: string } for validation/Bad Request,
 *   - 500 and { error: string } on server error.
 */

/**
 * PUT /api/comments/:id
 * @name UpdateComment
 * @route {PUT} /api/comments/:id
 * @summary Update an existing comment by id.
 * @param {import("express").Request} req - Express request object. req.params.id should be a MongoDB ObjectId string. req.body contains fields to update.
 * @param {import("express").Response} res - Express response object.
 * @returns {Promise<void>} Responds with:
 *   - 200 and the updated CommentDocument on success,
 *   - 400 and { error: string } if the id is invalid or request is bad,
 *   - 404 and { error: string } if no comment was found,
 *   - 500 and { error: string } on server error.
 */

/**
 * DELETE /api/comments/:id
 * @name DeleteComment
 * @route {DELETE} /api/comments/:id
 * @summary Delete a comment by id.
 * @param {import("express").Request} req - Express request object. req.params.id should be a MongoDB ObjectId string.
 * @param {import("express").Response} res - Express response object.
 * @returns {Promise<void>} Responds with:
 *   - 200 and { message: string } on successful deletion,
 *   - 400 and { error: string } if the id is invalid,
 *   - 404 and { error: string } if the comment was not found,
 *   - 500 and { error: string } on server error.
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// hey github copilot, please write the following routes for comments:
// GET /api/comments - get all comments
// GET /api/comments/:id - get a comment by id
// POST /api/comments - create a new comment
// PUT /api/comments/:id - update a comment by id
// DELETE /api/comments/:id - delete a comment by id


router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid comment id" });
        }

        const comment = await Comment.findByIdAndDelete(id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }

        return res.json({ message: "Comment deleted" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
