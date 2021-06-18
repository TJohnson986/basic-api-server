'use strict';

const express = require('express');

const router = express.Router();
const data = require('../models/index.js');

router.get('/food', getAll);
router.post('/food', create);
router.put('/food', update);
router.delete('/food', remove);

async function getAll (req, res) {
  const foodItems = await data.food.findAll();
  console.log('food items in db', foodItems);
  res.send('In Progress');
}

function create (req, res) {
  res.send('In Progress');
}

function update (req, res) {
  res.send('In Progress');
}

function remove (req, res) {
  res.send('In Progress');
}


module.exports = router;