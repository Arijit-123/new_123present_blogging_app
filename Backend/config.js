const mongoose = require('mongoose');
const { Sequelize } = require('sequelize');

const connectDB = async () => {
  try {
    // MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');

    // MySQL
    const sequelize = new Sequelize(process.env.MYSQL_URI);
    await sequelize.authenticate();
    console.log('MySQL Connected...');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
