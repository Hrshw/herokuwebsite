import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "books",
        };
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("connected successfully..");
    } catch (err) {
        console.log(err);
    };
};

export default connectDB;