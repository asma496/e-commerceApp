import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const CartReducer = (state, action) => {

    const { shoppingCart, totalprice, totalQty } = state;

    let product;
    let index;
    let updatedPrice;
    let updatedQty;

    switch (action.type) {

        case 'ADD_TO_CART':

            const check = shoppingCart.find(product => product.ProductID === action.id);
            if (check) {
                toast.info('this product is already in your cart', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
                return state;
            }
            else {
                product = action.product;
                product['qty'] = 1;
                product['TotalProductPrice'] = product.price * product.qty;
                updatedQty = totalQty + 1;
                updatedPrice = totalprice + product.price;
                return {
                    shoppingCart: [product, ...shoppingCart], totalprice: updatedPrice, totalQty: updatedQty
                }
            }
            break;

        case 'INC':
            product = action.cart;
            product.qty = ++product.qty;
            product.Totalproductprice = product.qty * product.price;
            updatedQty = totalQty + 1;
            updatedPrice = totalprice + product.price;
            index = shoppingCart.findIndex(cart => cart.ProductID === action.id);
            shoppingCart[index] = product;
            return {
                shoppingCart: [...shoppingCart], totalprice: updatedPrice, totalQty: updatedQty
            }
            break;

        case 'DEC':
            product = action.cart;
            if (product.qty > 1) {
                product.qty = product.qty - 1;
                product.Totalproductprice = product.qty * product.price;
                updatedPrice = totalprice - product.price;
                updatedQty = totalQty - 1;
                index = shoppingCart.findIndex(cart => cart.ProductID === action.id);
                shoppingCart[index] = product;
                return {
                    shoppingCart: [...shoppingCart], totalprice: updatedPrice, totalQty: updatedQty
                }
            }
            else {
                return state;
            }
            break;

        case 'DELETE':
            const filtered = shoppingCart.filter(product => product.ProductID !== action.id);
            product = action.cart;
            updatedQty = totalQty - product.qty;
            updatedPrice = totalprice - product.qty * product.price;
            return {
                shoppingCart: [...filtered], totalprice: updatedPrice, totalQty: updatedQty
            }
            break;

        case 'EMPTY':
            return {
                shoppingCart: [], totalprice: 0, totalQty: 0
            }

        default:
            return state;

    }

}