const { DataTypes }  = require('sequelize')

module.exports = (sequelize) => { 
  sequelize.define('Types', {
    name: { 
      type:DataTypes.STRING
    }
  },{timestamps:false})
}