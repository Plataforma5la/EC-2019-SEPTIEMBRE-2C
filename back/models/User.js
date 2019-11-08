const S = require("sequelize");
const db = require("../config/db");

// const Comment = require("./Comment");

class User extends S.Model {}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
      
    },
    lastName: {
      type: S.STRING,
      allowNull: false,
      
    },
    email: {
      type: S.STRING,
      allowNull: false,
      
    },
    isAdmin:{
      type: S.BOOLEAN,
      allowNull:true,
      defaultValue: false
    },
    direction: {
      type: S.STRING,
      allowNull: false,
      
    },
    password: {
      type: S.STRING,
      allowNull: false
    },
    salt: {
      type: S.STRING
    }
  },
  {
    sequelize: db,
    modelName: "user"
  }
);

// User.hasMany(Comment, { as: "user" });

module.exports = User;
