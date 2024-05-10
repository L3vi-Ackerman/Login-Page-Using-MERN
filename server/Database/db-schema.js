const mongoose = require("mongoose");

// Custom validator function to check if the password contains at least one alphanumeric character and one special character
function validatePassword(password) {
  const alphanumericRegex = /[a-zA-Z0-9]/;
  const specialCharRegex = /[^a-zA-Z0-9]/; // Matches any character that is not alphanumeric
  return alphanumericRegex.test(password) && specialCharRegex.test(password);
}

// Define the schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Minimum length of the password
    validate: [
      validatePassword,
      "Password must contain at least one alphanumeric character and one special character",
    ],
  },
});

// Create a model from the schema
const User = mongoose.model("Login", userSchema);

module.exports = User;
