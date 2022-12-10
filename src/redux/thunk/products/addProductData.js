import { addProduct } from "../../actions/productAction";

export const addProductData = (product) => {
    return async (dispatch, getState) => {
        const resp = await fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        const data = await resp.json();
        if (data.acknowledged) {
            dispatch(addProduct({ _id: data.insertedId, ...product }));
        }
    };
};
