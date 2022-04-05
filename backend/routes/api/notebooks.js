const express = require("express");
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");
const {requireAuth} = require('../../utils/auth.js')

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
router.post("/", requireAuth, asyncHandler(async (req, res) => {
    const { title, userId } = req.body;
    const newNotebook = await Notebook.create({
      title: title,
      userId: userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return res.json(newNotebook);
  })
);

//DELETE a Notebook:
router.delete("/notebook/:notebookId", asyncHandler(async (req, res) => {
    const notebookId = req.params.notebookId;
    const notebook = await Notebook.findByPk(notebookId);
    const userId = notebook.userId;
    await notebook.destroy();

    const notebooks = await Notebook.findAll({
      where: { userId: userId },
    });
    return res.json(notebooks);
  })
);

module.exports = router;
