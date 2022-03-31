const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our User model
class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        user.username = await user.username.toLowerCase();
        return user;
      },
      beforeUpdate: async (user) => {
        user.username = await user.username.toLowerCase();
        return user;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
