const models = require('../models');

exports.show_login = function(req, res, next) {
	res.render('users/login', { formData: {}, errors: {} });
}

exports.show_signup = function(req, res, next) {
	res.render('users/signup', { formData: {}, errors: {} });
}