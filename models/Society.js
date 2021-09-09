const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const societySchema = new Schema(
	{
		name: String,
		property: [{ type: Schema.Types.ObjectId, ref: 'Property' }],
	},
	{ timestamps: true }
);

module.exports = model('Society', societySchema);
