import {
    utility
} from 'util/util';

const cartService = {
    getCartCount: function (resolve, reject) {
        utility.request({
            method: 'GET',
            url: utility.getServerUrl('/cart/cartcount'),
            success: resolve,
            error: reject
        });
    },
    addToCart: function (productInfo, resolve, reject) {
        utility.request({
            method: 'POST',
            url: utility.getServerUrl('/cart'),
            contentType: 'application/json'
            data: JSON.stringify(productInfo),
            success: resolve,
            error: reject
        });
    },
    getCartList: function (resolve, reject) {
        utility.request({
            method: 'GET',
            url: utility.getServerUrl('/carts'),
            success: resolve,
            error: reject
        });
    },
    updateCartProduct: function (productInfo, resolve, reject) {
        utility.request({
            method: 'PATCH',
            url: utility.getServerUrl('/cart'),
            data: productInfo,
            success: resolve,
            error: reject
        });
    },
    deleteCartProduct: function (productId, resolve, reject) {
        utility.request({
            method: 'DELETE',
            url: utility.getServerUrl(`/cart/${productId}`),
            success: resolve,
            error: reject
        });
    }
};
export {
    cartService
}