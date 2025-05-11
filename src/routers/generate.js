const express = require('express');

/**
 * Generate routers for all Sequelize models.
 * @param {Object} models - An object containing Sequelize models.
 * @returns {Object} - An object containing the generated routers.
 */

const generateRouters = (models) => {
  const routers = {};

  // Error message for not found records
  const error404 = (modelName) => ({
    error: `${modelName} not found`,
  });

  // Create the routers for each model
  Object.entries(models).forEach(([modelName, model]) => {
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

    routers[modelName] = router;
  });

  return routers;
};

module.exports = generateRouters;
