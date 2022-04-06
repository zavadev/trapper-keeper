const express = require("express");
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");
const {requireAuth} = require('../../utils/auth.js')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

//GET ALL of a User's Notebooks (READ)
router.get("/", requireAuth, asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const notebooks = await db.Notebook.findAll({
      where: { userId: userId },
      order: [["updatedAt", "DESC"]],
    });
    return res.json(notebooks);
  })
);

//CREATE new Notebook:

const validateNotebook = [
  check('title')
    .exists({ checkFalsy: true })
    .isLength({ max: 50 })
    .withMessage('Notebook title must be less than 50 characters!'),
  handleValidationErrors
];

router.post("/", validateNotebook, requireAuth, asyncHandler(async (req, res) => {
    const { title, userId } = req.body;
    const newNotebook = await db.Notebook.create({
      title: title,
      userId: userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return res.json(newNotebook);
  })
);

//DELETE a Notebook:
router.delete("/:notebookId", requireAuth, asyncHandler(async (req, res) => {
    const notebookId = req.params.notebookId;
    const notebook = await db.Notebook.findByPk(notebookId);
    const userId = notebook.userId;
    await notebook.destroy();

    const notebooks = await db.Notebook.findAll({
      where: { userId: userId },
    });
    return res.json(notebooks);
  })
);

module.exports = router;