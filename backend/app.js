// app.js
const express = require('express');
const path = require('path');
require('dotenv').config();

const projectRoutes = require('./routes/project');
const userRoutes = require('./routes/user');
const path = require('path');
const { error } = require('console');

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
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
