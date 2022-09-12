const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const Week = require('./Week');
const User = require('./User');

class Progress extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
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
