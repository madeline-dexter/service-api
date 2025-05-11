const { Sequelize } = require('sequelize');

// Load constants from the config modules
const { DATA_PATH } = require('./config/env');
const { DB_CONFIG } = require(`./config/db`);

// Load the YAML file merging function
const { mergeYaml } = require('./utils/yaml');

// Load the model generator function
const generateModels = require('./models/generate');

// Create the Sequelize instance
const sequelize = new Sequelize(DB_CONFIG);

// Merge the model definition YAML files
const mergedYaml = mergeYaml(DATA_PATH);

// Generate Sequelize models from the YAML
generateModels(mergedYaml, sequelize);

// // Define Sequelize model associations
// User.belongsToMany(Role, { through: 'user_role', foreignKey: 'role_id' });
// Role.belongsToMany(User, { through: 'user_role', foreignKey: 'user_id' });
// User.hasMany(Session, { foreignKey: 'user_id' });
// Session.belongsTo(User, { foreignKey: 'user_id' });

module.exports = { sequelize };
