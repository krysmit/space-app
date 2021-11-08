const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Emailer extends Model {}

Emailer.init(
    {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'emailer',
      }
);

module.exports = Emailer;