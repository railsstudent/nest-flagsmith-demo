import Joi = require('joi');

export const validationSchema = Joi.object({
  APP_ENV: Joi.string()
    .valid('development', 'production')
    .default('development'),
  PORT: Joi.number().default(5001),
  FLAGSMITH_API_URL: Joi.string().required(),
  FLAGSMITH_API_KEY: Joi.string().required(),
});
