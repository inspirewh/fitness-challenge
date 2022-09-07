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
    user_id: { //foreign key
      type: DataTypes.INTEGER,
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
    week_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
