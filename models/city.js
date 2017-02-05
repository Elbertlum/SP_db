'use strict';
module.exports = function(sequelize, DataTypes) {
  var City = sequelize.define('City', {
    name: DataTypes.STRING,
    code: DataTypes.INTEGER,
    AdminAreaId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        City.belongsTo(models.AdminArea);
      }
    }
  });
  return City;
};