const express = require('express');

const User = require('../models/User');

const router = express.Router();

// Create a new user
router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    if (error instanceof Sequelize.ValidationError) {
      res.status(400).json({ error: 'Invalid request data' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
    console.error(error);
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
    console.error(error);
  }
});

// Get a user by ID
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Invalid request data' });
    console.error(error);
  }
});

// Update a user by ID
router.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Sequelize.ValidationError) {
      res.status(400).json({ error: 'Invalid request data' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
    console.error(error);
  }
});

// Delete a user by ID
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    await user.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
    console.error(error);
  }
});

module.exports = router;
