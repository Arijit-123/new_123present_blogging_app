const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URI);

const User = sequelize.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: true });

module.exports = User;
