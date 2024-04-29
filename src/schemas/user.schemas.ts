import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        id: Number,
        userName: String,
        weight: Number,
        password: String,
        email: String,
    },
    { timestamps: true }
);

export default model("User", userSchema);