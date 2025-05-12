const { Sequelize, DataTypes } = require('sequelize');

/**
 * Generate Sequelize models.
 * @param {Object} models - An object defining Sequelize models.
 * @param {Sequelize} sequelize - A Sequelize instance.
 */

module.exports = (models, sequelize) => {
  // Define the Sequelize models
  for (const [modelName, modelConfig] of Object.entries(models)) {
    const { tableName, fields, options } = modelConfig;

    // Convert field types to Sequelize DataTypes
    const sequelizeFields = {};
    for (const [fieldName, fieldConfig] of Object.entries(fields)) {
      const { type, ...rest } = fieldConfig;
      sequelizeFields[fieldName] = { type: DataTypes[type], ...rest };
    }

    // Define the Sequelize model
    models[modelName] = sequelize.define(modelName, sequelizeFields, {
      tableName,
      ...options,
    });
  }

  // // Define associations between Sequelize models
  // for (const [modelName, modelConfig] of Object.entries(modelYaml)) {
  //   const { fields } = modelConfig;

  //   for (const [fieldName, fieldConfig] of Object.entries(fields)) {
  //     if (fieldConfig.references) {
  //       const { model: referencedModel, key: referencedKey } = fieldConfig.references;

  //       // Define the association
  //       models[modelName].belongsTo(models[referencedModel], {
  //         foreignKey: fieldName,
  //         targetKey: referencedKey,
  //       });

  //       models[referencedModel].hasMany(models[modelName], {
  //         foreignKey: fieldName,
  //       });
  //     }
  //   }
  // }
};
