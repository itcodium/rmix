const asyncActionType = (type) => ({
    INIT: `${type}/init`,
    FETCH: `${type}/fetch`,
    LOADING: `${type}/loading`,
    SUCCESS: `${type}/success`,
    ERROR: `${type}/error`,
    DELETE: `${type}/delete`,
    PUT: `${type}/put`,
    POST: `${type}/post`,
});

export const PRODUCTS = asyncActionType('products');
