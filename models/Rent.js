const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const rentSchema = new Schema(
	{
		description: {
			type: String,
			required: [true, 'Campo obligatorio'],
			trim: true,
		},
		amount: {
			type: Number,
			required: [true, 'Campo obligatorio'],
		},
		transactionDate: {
			type: Date,
			required: [true, 'Campo obligatorio'],
		},
		author: { type: Schema.Types.ObjectId, ref: 'Tenant' },
	},
	{ timestamps: true }
);

module.exports = model('Rent', rentSchema);
