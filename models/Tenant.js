const mongoose = require('mongoose');
const validator = require('validator');

const { Schema, model } = mongoose;

const tenantSchema = new Schema(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		email: {
			type: String,
			lowercase: true,
			trim: true,
			unique: true,
			validate: {
				validator: validator.isEmail,
				message: 'Email no valido',
				isAsync: false,
			},
		},
		phone: { type: Number },
		property: { type: String, required: true },
		address: { type: String },
		rentAmount: { type: Number, required: true },
		rentPaymentHistory: [{ type: Schema.Types.ObjectId, ref: 'Rent' }],
		waterContract: String,
		electricityContract: String,
		insurance: String,
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	}
);

module.exports = model('Tenant', tenantSchema);
