import connectMongo from "../../../database/conn";
import Users from "../../../model/Schema";
import { hash } from "bcryptjs";

// Async function to handle user registration
export default async function handler(req, res) {
  // Connect to MongoDB, handle connection failure
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  // Only accept POST requests for user registration
  if (req.method === "POST") {
    // Return an error if no form data is provided
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" });
    // Extract username, email, and password from request body
    const { username, email, password } = req.body;
    console.log(req.body);

    // Check for duplicate users with the same email
    const checkexisting = await Users.findOne({ email });
    if (checkexisting)
      return res.status(422).json({ message: "User Already Exists...!" });

    // Hash the password and create a new user in the database
    Users.create({ username, email, password: await hash(password, 12) });
    // Respond with a success message and user information
    res.status(201).json({ status: true, user: { username, email, password } });
  } else {
    // Return an error if the HTTP method is not valid (only POST accepted)
    res
      .status(500)
      .json({ message: "HTTP method not valid only POST Accepted" });
  }
}
