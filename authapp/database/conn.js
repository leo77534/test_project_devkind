import mongoose from "mongoose";

const connecMongo = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL);

    if (connection.readyState == 1) {
      console.log("Database Connected!");
      return Promise.resolve(true);
    }
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export default connecMongo;
