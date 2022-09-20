const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Progres extends Model {}

Progres.init(
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
        model: 'week',
        key: 'id'
      },
      defaultValue: 1
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },

  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'progres'
  }
);

module.exports = Progres;
