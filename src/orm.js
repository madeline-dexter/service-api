const { Sequelize } = require('sequelize');

const { MODELS_PATH } = require('./config/env');
const { DB_CONFIG } = require(`./config/db`);
const { mergeYaml } = require('./utils');
const { generateModels } = require('./models');

// Initialize the Sequelize ORM
const sequelize = new Sequelize(DB_CONFIG);

// Parse and merge the model definitions
const models = mergeYaml(MODELS_PATH);

// Generate the Sequelize models
generateModels(models, sequelize);

// // Define the model associations
// User.belongsToMany(Role, { through: 'user_role', foreignKey: 'role_id' });
// Role.belongsToMany(User, { through: 'user_role', foreignKey: 'user_id' });
// User.hasMany(Session, { foreignKey: 'user_id' });
// Session.belongsTo(User, { foreignKey: 'user_id' });

module.exports = { sequelize };
