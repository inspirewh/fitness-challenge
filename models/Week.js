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
    week_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },

    src: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    week_description: {
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


