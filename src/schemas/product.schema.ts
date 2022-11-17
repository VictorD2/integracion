import Joi from 'joi';

const page = Joi.number().required().messages({
  'number.base': 'El campo page es inválido',
  'any.required': 'El campo page es requerido.',
});

const limit = Joi.number().required().messages({
  'number.base': 'El campo limit es inválido',
  'any.required': 'El campo limit es requerido.',
});

const filter = Joi.string().optional().messages({
  'string.base': 'El campo filter es inválido',
  'any.required': 'El campo filter es requerido.',
  'string.empty': 'El campo filter no puede estar vácio',
});

export const getProductsSchema = Joi.object({
  page,
  limit,
  filter,
}).options({ abortEarly: true });

export const getProductsSchema2 = Joi.object({
  page,
  limit,
  filter,
}).options({ abortEarly: true });
