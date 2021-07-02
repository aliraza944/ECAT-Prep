const joi = require("joi");
// sign up validation

const signupvalidation = (data) => {
  const joi = require("Joi");
  const schema = joi.object().keys({
    name: joi.string().min(6).required(),
    email: joi.string().min(6).required().email(),
    password: joi.string().min(6).required(),
  });
  //  dat validation
  return schema.validate(data);
};

const loginvalidation = (data) => {
  const joi = require("Joi");
  const schema = joi.object().keys({
    email: joi.string().min(6).required().email(),
    password: joi.string().min(6).required(),
  });
  //  date validation
  return schema.validate(data);
};

module.exports.signupvalidation = signupvalidation;
module.exports.loginvalidation = loginvalidation;
