import mongoose, { Document, Schema } from "mongoose";


export interface IUser extends Document {
    email: string;
    password: string;
    role: "user" | "creator" | "admin";
    name: string;
    username: string;
}

const UserSchema: Schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: [
            "user",
            "creator",
            "admin"
        ],
        default: "user"
    },
    name: {
        type: String,
        required: true
    }
});

export default mongoose.model<IUser>("User", UserSchema);