import { Schema, model } from "mongoose";

const categorySchema = new Schema(
    {
        id: Number,
        name: String,
        color: String,
    },
    { timestamps: true }
);

export default model("Category", categorySchema);