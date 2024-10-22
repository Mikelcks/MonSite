const express = require('express');
const path = require('path');
require('dotenv').config();

const projectRoutes = require('./routes/project');
const userRoutes = require('./routes/user');

const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Middleware CORS
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
});

// Utiliser les routes
app.use('/api/projects', projectRoutes);
app.use('/api/auth', userRoutes);

// Middleware pour servir les fichiers statiques
app.use('/assets', express.static(path.join(__dirname, 'src/assets'))); // Ajout de cette ligne

module.exports = app;