import connectMongo from "../../../database/conn";
import Users from "../../../model/Schema";
import { hash } from "bcryptjs";

// Define the handler function for processing PUT requests to update user information
export default async function handler(req, res) {
  // Establish a connection to the MongoDB database
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  // Only accept requests with the PUT method
  if (req.method === "PUT") {
    // Check if request body is present
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" });
    // Extract user information from the request body
    const { username, email, password } = req.body;

    // Check for duplicate users based on email
    const existingUser = await Users.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user information if provided in the request
    existingUser.username = username || existingUser.username;
    existingUser.email = email || existingUser.email;
    existingUser.password = password
      ? await hash(password, 12)// Hash the new password if provided
      : existingUser.password;// Keep the existing hashed password if not provided

    // Save the updated user information to the database
    await existingUser.save();

    // Return a success response with the updated user details
    res.status(200).json({
      status: true,
      user: {
        username: existingUser.username,
        email: existingUser.email,
        // Avoid sending the hashed password in the response for security reasons
      },
    });
  } else {
    // Return an error response for non-PUT requests
    res
      .status(500)
      .json({ message: "HTTP method not valid only PUT Accepted" });
  }
}
