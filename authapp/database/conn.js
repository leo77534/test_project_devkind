import mongoose from "mongoose";

// Async function to connect to MongoDB using the provided MONGO_URL from the environment variables.
const connecMongo = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL);

    if (connection.readyState == 1) {
      console.log("Database Connected!");
      return Promise.resolve(true); // Resolving the promise with a success flag.
    }
  } catch (error) {
    console.log(error);
    return Promise.reject(error); // Rejecting the promise with the encountered error.
  }
};
// Exporting the connectMongo function to make it available for use in other modules.
export default connecMongo;
