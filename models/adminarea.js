'use strict';
module.exports = function(sequelize, DataTypes) {
  var AdminArea = sequelize.define('AdminArea', {
    name: DataTypes.STRING,
    code: DataTypes.INTEGER,
    country: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return AdminArea;
};