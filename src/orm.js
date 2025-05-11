const { Sequelize } = require('sequelize');
const { DB_CONFIG } = require(`./config`);

// Load the YAML file merging function
const { mergeYaml } = require('./utils/yaml');

// Load the model generator function
const generateModels = require('./models/generate');

// Create the Sequelize instance
const sequelize = new Sequelize(DB_CONFIG);

// Merge the model definition YAML files
const yamlPath = './src/data/models';
const mergedYaml = mergeYaml(yamlPath);

// Generate Sequelize models from the YAML
generateModels(mergedYaml, sequelize);

// // Define Sequelize model associations
// User.belongsToMany(Role, { through: 'user_role', foreignKey: 'role_id' });
// Role.belongsToMany(User, { through: 'user_role', foreignKey: 'user_id' });
// User.hasMany(Session, { foreignKey: 'user_id' });
// Session.belongsTo(User, { foreignKey: 'user_id' });

module.exports = { sequelize };
