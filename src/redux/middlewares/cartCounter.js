import { ADD_TO_CART } from "../actionTypes/actionTypes";

const cartCounter = (store) => (next) => (action) => {
    const cart = store.getState()?.product?.cart;
    if (action.type === ADD_TO_CART) {
        const newAction = {
            ...action,
            payload: {
                ...action.payload,
                cartPosition: cart.length,
            },
        };
        return next(newAction);
    } else {
        return next(action);
    }
};

export default cartCounter;
