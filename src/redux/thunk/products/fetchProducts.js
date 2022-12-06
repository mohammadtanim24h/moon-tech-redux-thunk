import { loadProduct } from "../../actions/productAction";

export const loadProductData = () => {
    return async (dispatch, getState) => {
        const resp = await fetch(
            "https://raw.githubusercontent.com/mohammadtanim24h/moon-tech-redux-thunk/main/public/products.json"
        );
        const data = await resp.json();
        if (data.length) {
            dispatch(loadProduct(data));
        }
    };
};
