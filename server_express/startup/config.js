const result = require("dotenv").config(/.env);

module.exports = function() {
  if (result.Error || !process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
    throw new Error('FATAL ERROR: aws credential is not defined.');
  }
}