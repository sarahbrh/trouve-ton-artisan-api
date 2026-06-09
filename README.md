# Trouve ton artisan - API

API REST pour la plateforme "Trouve ton artisan" de la région Auvergne-Rhône-Alpes.

## Technologies

- Node.js / Express
- MySQL / Sequelize
- dotenv / cors

## Prérequis

- Node.js v18+
- MySQL

## Installation

1. Cloner le repo :
   git clone https://github.com/sarahbrh/trouve-ton-artisan-api.git

2. Installer les dépendances :
   npm install

3. Créer un fichier .env :
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=root
   DB_NAME=trouve_ton_artisan
   DB_PORT=3306
   PORT=4000

4. Créer la base de données :
   mysql -u root -p < create.sql
   mysql -u root -p < seed.sql

5. Lancer le serveur :
   node index.js

## Routes disponibles

- GET /api/categories
- GET /api/artisans
- GET /api/artisans/top
- GET /api/artisans/categorie/:id
- GET /api/artisans/:id
- GET /api/artisans/search/:nom
