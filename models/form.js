const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define Form model using Sequelize
class Form extends Model {};


Form.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userForm: {
      type: DataTypes.INTEGER,
      allowNull: false, // Requires a value
      references: {
        model: 'user', // References 'user' model
        key: 'id', // Uses 'id' column of 'user' model as reference
      },
    },
  },
  {
    sequelize, // Pass sequelize connection
    timestamps: false, // Disable timestamps (e.g., createdAt, updatedAt)
    freezeTableName: true, // Use model name as table name
    underscored: true, // Use underscores in column names (e.g., user_form)
    modelName: 'form', // Model name in singular form
  }
);

module.exports = Form; // Export Form model

