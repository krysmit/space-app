const User = require('./User');
const Project = require('./Project');
const Emailer = require('./Emailer');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Emailer.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project, Emailer };
