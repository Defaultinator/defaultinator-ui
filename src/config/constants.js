const API_BASE_URI = process.env.API_BASE_URI || "http://localhost";
const API_PORT = process.env.API_PORT || 3001;
const API_URI = `${API_BASE_URI}:${API_PORT}`;

const REQUEST_ACCOUNT_EMAIL = 'cbarnard@rapid7.com';

module.exports = {
  API_URI,
  REQUEST_ACCOUNT_EMAIL,
};