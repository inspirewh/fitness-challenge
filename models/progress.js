const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Week = require('./Week');

class Progress extends Model {
}

Progress.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    pushups: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    burpees: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    situps: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    week_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Week,
        key: 'id'
      },
      defaultValue: 1
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },

  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    modelName: 'progress',
  }
);

module.exports = Progress;
