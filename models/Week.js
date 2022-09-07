const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Week extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Week.init(
  {
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },


  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'week',
  }
);

module.exports = Week;


