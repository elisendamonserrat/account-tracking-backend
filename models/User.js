const mongoose = require('mongoose');
const validator = require('validator');

const { Schema } = mongoose;

const userSchema = new Schema(
	{
		firstName: { type: String, required: true, unique: true },
		email: {
			type: String,
			required: [true, 'Este campo es obligatorio'],
			lowercase: true,
			trim: true,
			unique: true,
			validate: validator.isEmail,
			message: '{VALUE} no es un email valido',
			index: true,
		},
		hashedPassword: {
			type: String,
			required: true,
			minlength: 6,
		},
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	}
);

const User = mongoose.model('User', userSchema);

module.exports = User;
