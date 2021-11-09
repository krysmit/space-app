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

<<<<<<< HEAD


=======
>>>>>>> b51f14e1cf4a3c996d439fc654d7b5e3c7ca524d
module.exports = { User, Project, Emailer };
