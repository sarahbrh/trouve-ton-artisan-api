const express = require("express");
const router = express.Router();
const Artisan = require("../models/Artisan");
const Specialite = require("../models/Specialite");
const Categorie = require("../models/Categorie");

// GET tous les artisans
router.get("/", async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      include: {
        model: Specialite,
        include: { model: Categorie },
      },
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
});

// GET artisans du mois (top = true)
router.get("/top", async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { top: true },
      include: {
        model: Specialite,
        include: { model: Categorie },
      },
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
});

// GET artisans par catégorie
router.get("/categorie/:id", async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      include: {
        model: Specialite,
        where: { id_categorie: req.params.id },
        include: { model: Categorie },
      },
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
});

// GET un artisan par id
router.get("/:id", async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, {
      include: {
        model: Specialite,
        include: { model: Categorie },
      },
    });
    if (!artisan)
      return res.status(404).json({ message: "Artisan non trouvé" });
    res.json(artisan);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
});

// GET recherche par nom
router.get("/search/:nom", async (req, res) => {
  try {
    const { Op } = require("sequelize");
    const artisans = await Artisan.findAll({
      where: {
        nom: { [Op.like]: `%${req.params.nom}%` },
      },
      include: {
        model: Specialite,
        include: { model: Categorie },
      },
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
});

module.exports = router;
