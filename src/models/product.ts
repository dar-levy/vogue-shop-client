export interface Product {
    id: number,
    name: string,
    description: string,
    pictureUrl: string,
    price: number,
    brand: string,
    type?: string,
    quantityInStock?: number
}

schema = {
    _id: Joi.string(),
    name: Joi.string().required().label("Name"),
    description: Joi.string().required().label("Description"),
    price: Joi.integer().required().label("Price"),
    brand: Joi.string().required().label("Brand"),
    type: Joi.string().required().label("Type"),
    pictureUrl: Joi.string().required().uri().label("Image URL"),
};
