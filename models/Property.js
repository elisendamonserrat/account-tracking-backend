const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const propertySchema = new Schema(
	{
		name: String,
		tenants: [{ type: Schema.Types.ObjectId, ref: 'Tenant' }],
		expenses: [{ type: Schema.Types.ObjectId, ref: 'Expense' }],
		rents: [{ type: Schema.Types.ObjectId, ref: 'Rent' }],
	},
	{ timestamps: true }
);

module.exports = model('Property', propertySchema);
