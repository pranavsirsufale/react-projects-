

import mongoose from 'mongoose';

const connectDB = () => {
    const uri = import.meta.env.VITE_MONGODB_URI
    mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });

}

export { connectDB }