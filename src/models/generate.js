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
    const modelAttributes = {};
    
    for (const [fieldName, fieldConfig] of Object.entries(fields)) {
      const { type, association, ...rest } = fieldConfig;
      modelAttributes[fieldName] = { type: DataTypes[type], ...rest };
    }

    sequelize.define(modelName, modelAttributes, { tableName, ...options });
  }

  // Define associations between models
  for (const [modelName, modelConfig] of Object.entries(models)) {
    const { fields } = modelConfig;
    
    for (const [fieldName, fieldConfig] of Object.entries(fields)) {
      const { associations } = fieldConfig;

      if (associations) {
        for (const association of associations) {
          const { type, target, options } = association;
          const model = sequelize.models[modelName];
          const targetModel = sequelize.models[target]

          switch (type) {
            case 'hasOne':
              model.hasOne(targetModel, options);
              break;
            case 'belongsTo':
              model.belongsTo(targetModel, options);
              break;
            case 'hasMany':
              model.hasMany(targetModel, options);
              break;
            case 'belongsToMany':
              model.belongsToMany(targetModel, options);
              break;
            default:
              throw new Error(`Unknown association type: ${type}`);
          }
        }
      }
    }
  }
}