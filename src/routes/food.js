'use strict';

const express = require('express');

const router = express.Router();
const data = require('../models/index.js');

router.get('/food', getAll);
router.get('/food/:foodId', getOne);
router.post('/food', create);
router.put('/food/foodId', update);
router.delete('/food/foodId', remove);

async function getAll (req, res) {
  const foodItems = await data.food.findAll();
  console.log('food items in db', foodItems);
  res.send('In Progress');
}

async function getOne (req, res) {
  const foodId = req.params.foodId;
  const foodItem = await data.food.findOne({
    where: {
      id: foodId,
    },
  });
  res.status(200).send(foodItem);
}

async function create (req, res) {
  const foodObject = req.body;

  const foodData = await data.food.create(foodObject);
  res.send('In Progress');
}

async function update (req, res) {
  const foodId = res.params.foodId;
  const foodObject = req.body;

  const foodData = await data.food.findOne({where: { id: foodId}});
  await foodData.update.foodObject;

  res.status(200).send(foodObject);
}

function remove (req, res) {
  res.send('In Progress');
}


module.exports = router;