import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI");
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export default async function connectDB() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            bufferCommands: false,
            serverSelectionTimeoutMS: Number(
                process.env.MONGODB_SERVER_SELECTION_TIMEOUT || 10000
            ),
            socketTimeoutMS: Number(process.env.MONGODB_SOCKET_TIMEOUT || 15000),
        }).then((mongoose) => mongoose);
    }

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        throw error;
    }

    return cached.conn;
}