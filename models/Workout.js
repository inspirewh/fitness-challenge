const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Workout extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Workout.init(
  {
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

    src: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    href: {
      type:DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'workout',
  }
);

module.exports = Workout;


