import mongoose from "mongoose";

async function ConnectDB() {
    //connect database
    await mongoose.connect(`${process.env.NEXT_PUBLIC_DATABASE_URL}`);
}

export default ConnectDB;