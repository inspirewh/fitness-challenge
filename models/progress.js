const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Progress extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Progress.init(
  {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    progress_id: {
      type: DataTypes.STRING,
      allowNull: false,
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
    week_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    }
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'progress',
  }
);

module.exports = Progress;
