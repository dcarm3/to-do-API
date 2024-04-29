import { Schema, model } from "mongoose";

const taskSchema = new Schema(
    {
        id: Number,
        title: String,
        description: String,
        creationDate: Date,
        conclusionDate: Date,
        dueDate: Date,
        type: String,
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: false,
        },
        status: {
            type: String,
            enum: ["pending", "Concluded", "Ongoing"],
        },
        AssociatedUser: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

export default model("Task", taskSchema);