import { Schema, model, models } from "mongoose";

// Defining the user schema with username, email, and password fields
const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

// Creating a Mongoose model for the "user" collection, or using an existing one if available
const Users = models.user || model("user", userSchema);

// Exporting the Users model for use in other parts of the application
export default Users;
