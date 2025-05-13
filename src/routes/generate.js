const express = require('express');

/**
 * Generate routes for Sequelize models.
 * @param {Object} app - An Express app instance.
 * @param {Sequelize} sequelize - A Sequelize instance.
 */

module.exports = (app, sequelize) => {
  // Error message for not found records
  const error404 = (modelName) => ({
    error: `${modelName} not found`,
  });

  // Create the routers for each model
  Object.entries(sequelize.models).forEach(([modelName, model]) => {
    const router = express.Router();

    // Create a new record
    router.post(`/${modelName}`, async (req, res) => {
      const record = await model.create(req.body);
      res.status(201).json(record);
    });

    // Get all records
    router.get(`/${modelName}`, async (req, res) => {
      const records = await model.findAll();
      res.status(200).json(records);
    });

    // Get a record by ID
    router.get(`/${modelName}/:id`, async (req, res) => {
      const record = await model.findByPk(req.params.id);
      if (!record) return res.status(404).json(error404(modelName));
      res.status(200).json(record);
    });

    // Update a record by ID
    router.put(`/${modelName}/:id`, async (req, res) => {
      const record = await model.findByPk(req.params.id);
      if (!record) return res.status(404).json(error404);
      Object.assign(record, req.body);
      await record.save();
      res.status(200).json(record);
    });

    // Delete a record by ID
    router.delete(`/${modelName}/:id`, async (req, res) => {
      const record = await model.findByPk(req.params.id);
      if (!record) return res.status(404).json(error404);
      await record.destroy();
      res.status(200).json(record);
    });

    app.use('/', router);
  });
};
