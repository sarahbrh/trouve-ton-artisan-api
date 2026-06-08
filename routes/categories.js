const express = require("express");
const router = express.Router();
const Categorie = require("../models/Categorie");

// GET toutes les catégories
router.get("/", async (req, res) => {
  try {
    const categories = await Categorie.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
});

module.exports = router;
