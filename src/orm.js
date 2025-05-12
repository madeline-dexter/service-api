const { Sequelize } = require('sequelize');

// Load constants from the config modules
const { MODELS_PATH } = require('./config/env');
const { DB_CONFIG } = require(`./config/db`);

// Load the YAML file merging function
const { mergeYaml } = require('./utils');

// Load the model generator function
const { generateModels } = require('./models');

// Create the Sequelize instance
const sequelize = new Sequelize(DB_CONFIG);

// Merge model definitions from YAML
const models = mergeYaml(MODELS_PATH);

// Generate Sequelize models from the YAML
generateModels(models, sequelize);

// // Define Sequelize model associations
// User.belongsToMany(Role, { through: 'user_role', foreignKey: 'role_id' });
// Role.belongsToMany(User, { through: 'user_role', foreignKey: 'user_id' });
// User.hasMany(Session, { foreignKey: 'user_id' });
// Session.belongsTo(User, { foreignKey: 'user_id' });

module.exports = { sequelize };
