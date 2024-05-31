import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        dbName: "FooDelivery",
    }).
    then(()=>console.log("Connected to MongoDB Database"))
};
