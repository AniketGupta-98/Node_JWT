const mongoose = require('mongoose');
require('dotenv').config();

async function mongoDbConnect() {
  const {
    MONGO_USER,
    MONGO_PASS,
    MONGO_CLUSTER,
    MONGO_DBNAME,
  } = process.env;

  // const DB_URL = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_CLUSTER}.mongodb.net/?retryWrites=true&w=majority&appName=${MONGO_DBNAME}`;
  const DB_URL = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DBNAME}`;

  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected');
  });

  mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });

  try {
    await mongoose.connect(DB_URL, {serverSelectionTimeoutMS: 10000});

    console.log(`✅ Connected to MongoDB database: ${MONGO_DBNAME}`);
  } catch (error) {
    console.error('❌ Initial MongoDB connection error:', error.message);
    process.exit(1);
  }
}


module.exports = mongoDbConnect;
