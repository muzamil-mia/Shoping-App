import { SET_PRODUCTS, FETCH_PRODUCTS } from "../../constants/actionTypes";

const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}
const fetchProducts = () => {
    return async function (dispatch) {
        let products = await getData()
        let filterProducts = filterProducts(products)

        //filterproducts is our payload and we can create a action here
        dispatch({
            type: FETCH_PRODUCTS,
            payload: products
        })
    }
};

const filterProducts = (products) => {
    return products.filter(
        (product) =>
            product.category === `men's clothing` ||
            product.category === `women's clothing` || product.category === `jewelery`
    );
};


const getData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    let data = await response.json();
    return data;
}

export { setProducts, fetchProducts }