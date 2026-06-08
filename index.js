const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/database");
const Categorie = require("./models/Categorie");
const Specialite = require("./models/Specialite");
const Artisan = require("./models/Artisan");

// Relations
Specialite.belongsTo(Categorie, { foreignKey: "id_categorie" });
Categorie.hasMany(Specialite, { foreignKey: "id_categorie" });
Artisan.belongsTo(Specialite, { foreignKey: "id_specialite" });
Specialite.hasMany(Artisan, { foreignKey: "id_specialite" });

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const categoriesRouter = require("./routes/categories");
const artisansRouter = require("./routes/artisans");
const specialitesRouter = require("./routes/specialites");

app.use("/api/categories", categoriesRouter);
app.use("/api/artisans", artisansRouter);
app.use("/api/specialites", specialitesRouter);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "API Trouve ton artisan 🎉" });
});

// Connexion DB + démarrage serveur
sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Connecté à la base de données");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Serveur lancé sur le port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Erreur de connexion :", err);
  });
