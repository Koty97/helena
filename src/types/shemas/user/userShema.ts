import { Schema, model } from 'mongoose';

interface User {
	id: number
	token: number
	email: string
};

const UserSchema = new Schema<User>({
	id: { type: Number, required: true },
	token: { type: Number, required: true },
	email: { type: String, required: true }
});

export const UserModel = model<User>('User', UserSchema);