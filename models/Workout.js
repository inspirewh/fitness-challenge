const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {
}

Workout.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    workout_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    workout_title: {
      type: DataTypes.STRING,
      allowNull: false,

    },

    workout_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    youtube: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'workout',
  }
);

module.exports = Workout;


