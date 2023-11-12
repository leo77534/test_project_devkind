import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "../../../database/conn";
import Users from "../../../model/Schema";
import { compare } from "bcryptjs";

// Exporting the NextAuth configuration
export default NextAuth({
  // Configuring providers, in this case, only using the Credentials provider
  providers: [
    CredentialsProvider({
      name: "Credentials",
      // Async function to authorize the user based on provided credentials
      async authorize(credentials, req) {
        // Connecting to MongoDB. If an error occurs, catch it and log a message
        connectMongo().catch((error) => {
          error: "Connection Failed...!";
        });

        // Checking if a user with the provided email exists in the database
        const result = await Users.findOne({ email: credentials.email });
        if (!result) {
          throw new Error("No user Found with Email Please Sign Up...!");
        }

        // Comparing the provided password with the hashed password in the database
        const checkPassword = await compare(
          credentials.password,
          result.password
        );

        // If the password doesn't match or the email doesn't match, throw an error
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("Username or Password doesn't match");
        }

        // If everything is successful, return the user information
        return result;
      },
    }),
  ],
});
