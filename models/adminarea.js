'use strict';
module.exports = function(sequelize, DataTypes) {
  var AdminArea = sequelize.define('AdminArea', {
    name: DataTypes.STRING,
    code: DataTypes.INTEGER,
    CountryId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        AdminArea.belongsTo(models.Country);
        AdminArea.hasMany(models.City);
      }
    }
  });
  return AdminArea;
};