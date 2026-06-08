const express = require("express");
const router = express.Router();
const Specialite = require("../models/Specialite");

// GET toutes les spécialités
router.get("/", async (req, res) => {
  try {
    const specialites = await Specialite.findAll();
    res.json(specialites);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
});

module.exports = router;
