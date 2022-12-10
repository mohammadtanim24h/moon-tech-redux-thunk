import { removeProduct } from "../../actions/productAction";

export const deleteProductData = (id) => {
    return async (dispatch, getState) => {
        const resp = await fetch(`http://localhost:5000/product/${id}`, {
            method: "DELETE",
        });
        const data = await resp.json();
        if (data.acknowledged) {
            dispatch(removeProduct(id));
        }
    };
};
