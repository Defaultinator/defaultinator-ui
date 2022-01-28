export const CREDENTIALS_TABLE_CONFIG = {
  fields: [
    {
      "label": "Verified",
      "fieldName": "isVerified",
      "align": "center",
    },
    {
      "label": "Part",
      "fieldName": "part",
      "align": "center",
    },
    {
      "label": "Vendor",
      "fieldName": "vendor",
    },
    {
      "label": "Product",
      "fieldName": "product",
    },
    {
      "label": "Username",
      "fieldName": "username",
    },
    {
      "label": "Password",
      "fieldName": "password",
    },
  ],
  pagination: {
    rowsPerPageOptions: [5, 10, 50, 100],
    defaultRowsPerPage: 5,
  },
};

export const APIKEY_TABLE_CONFIG = {
  fields: [
    {
      "label": "Admin?",
      "fieldName": "isAdmin",
    },
    {
      "label": "E-Mail",
      "fieldName": "email",
    },
    {
      "label": "API Key",
      "fieldName": "apiKey",
    },
  ],
  pagination: {
    rowsPerPageOptions: [5, 10, 50, 100],
    defaultRowsPerPage: 5,
  },
};