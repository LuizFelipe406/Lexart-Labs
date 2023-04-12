import Joi from "joi";

const bodySchema = Joi.object({
  filter: Joi.object({
    source: Joi.string().required(),
    category: Joi.string().required(),
    name: Joi.string()
  }),
  products: Joi.array().items(
    Joi.object({
      id: Joi.string().required(),
      description: Joi.string().required(),
      photo: Joi.string().required(),
      price: Joi.string().required(),
      category: Joi.string().required(),
      website: Joi.string().required(),
    })
  ).required(),
});

export default bodySchema;