const mongoose = require('mongoose');
const passwordHash = require('password-hash');
const jwt = require('jwt-simple');
const config = require('../config/config');

var userSchema = mongoose.Schema({
	email: {
		type: String,
		lowercase: true,
		trim: true,
		unique: true,
		required: true
	},
	firstName: {
		type: String,
		lowercase: true,
		required: true
	},
	secondName: {
		type: String,
		lowercase: true,
	},
	password: {
        type: String,
        required: true
	},
	date: {
		type: Date,
	},
	numero: {
		type: Number,
	},
},{ timestamps: { createdAt: 'created_at' }})


userSchema.methods = {
	authenticate: function (password) {
		return passwordHash.verify(password, this.password);
	},
	getToken: function () {
		return jwt.encode(this, config.secret);
	}
}

module.exports = mongoose.model('User', userSchema);