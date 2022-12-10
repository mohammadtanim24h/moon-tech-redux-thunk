import { loadProduct } from "../../actions/productAction";

export const loadProductData = () => {
    return async (dispatch, getState) => {
        const resp = await fetch("http://localhost:5000/products");
        const data = await resp.json();
        if (data?.data?.length) {
            dispatch(loadProduct(data.data));
        }
    };
};
