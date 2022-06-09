const { Router } = require('express');
const Planet = require('../models/Planet');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchedPlanet = await Planet.getById(id);
    res.json(matchedPlanet);

  })

  .get('/', async (req, res) => {
    const matchedPlanets = await Planet.getAll();
    res.json(matchedPlanets);
  });
