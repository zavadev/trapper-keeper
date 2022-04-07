const express = require("express");
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");
const {requireAuth} = require('../../utils/auth.js')
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

//GET ALL of User's Notes (READ):
router.get("/", requireAuth, asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const notes = await db.Note.findAll({
      where: { userId: userId },
      order: [["updatedAt", "DESC"]],
    });
    return res.json(notes);
  })
);

module.exports = router;
