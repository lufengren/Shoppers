import {
    utility
} from 'util/util';

const cartService = {
    getCartCount: function (resolve, reject) {
        utility.request({
            method: 'POST',
            url: utility.getServerUrl('/cart/get_cart_product_count.do'),
            success: resolve,
            error: reject
        });
    },
    addToCart: function (productInfo, resolve, reject) {
        // utility.request({
        //     method: 'POST',
        //     url: utility.getServerUrl('/cart/add.do'),
        //     data: productInfo,
        //     success: resolve,
        //     error: reject
        // });
        $.ajax({
            type: 'put',
            url: utility.getServerUrl('/cart/add/1'),
            data: productInfo,
            dataType: 'json',
            contentType: 'application/json',
            success: resolve,
            error: reject
        })
    },
    getCartList: function (resolve, reject) {
        utility.request({
            method: 'GET',
            url: utility.getServerUrl('/cart/list.do'),
            success: resolve,
            error: reject
        });
    },
    updateCartProduct: function (productInfo, resolve, reject) {
        utility.request({
            method: 'PATCH',
            url: utility.getServerUrl('/cart/update.do'),
            data: productInfo,
            success: resolve,
            error: reject
        });
    },
    deleteCartProduct: function (productId, resolve, reject) {
        utility.request({
            method: 'DELETE',
            url: utility.getServerUrl('/cart/delete.do'),
            data: productId,
            success: resolve,
            error: reject
        });
    }
};
export {
    cartService
}