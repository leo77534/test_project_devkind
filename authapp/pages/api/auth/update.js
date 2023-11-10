import connectMongo from "../../../database/conn";
import Users from "../../../model/Schema";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  // only post method is accepted
  if (req.method === "PUT") {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" });
    const { username, email, password } = req.body;

    // check duplicate users
    const existingUser = await Users.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user information
    existingUser.username = username || existingUser.username;
    existingUser.email = email || existingUser.email;
    existingUser.password = password
      ? await hash(password, 12)
      : existingUser.password;

    await existingUser.save();

    res.status(200).json({
      status: true,
      user: {
        username: existingUser.username,
        email: existingUser.email,
        // Avoid sending the hashed password in the response
      },
    });
  } else {
    res
      .status(500)
      .json({ message: "HTTP method not valid only PUT Accepted" });
  }
}
