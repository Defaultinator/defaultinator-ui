require('dotenv').config();

const DEFAULT_PORT = process.env.PORT || 3001;

const API_BASE_URI = process.env.API_BASE_URI || "http://localhost";
const API_PORT = process.env.API_PORT || 3000;
const API_URI = `${API_BASE_URI}:${API_PORT}`;


module.exports = {
  DEFAULT_PORT,
  API_URI,
};

