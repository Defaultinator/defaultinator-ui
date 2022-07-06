const API_BASE_URI = process.env.REACT_APP_API_BASE_URI || "http://localhost";
const API_PORT = process.env.REACT_APP_API_PORT || 3001;
const API_URI = `${API_BASE_URI}:${API_PORT}`;

// todo: force config of this
const REQUEST_ACCOUNT_EMAIL = 'cbarnard@rapid7.com';

module.exports = {
  API_URI,
  REQUEST_ACCOUNT_EMAIL,
};