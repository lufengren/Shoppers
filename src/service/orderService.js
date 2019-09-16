import {
    utility
} from 'util/util';
const orderService = {
    getProductList: function (resolve, reject) {
        utility.request({
            type: 'GET',
            url: utility.getServerUrl('/orders/products'),
            success: resolve,
            error: reject
        })
    },
    submitOrder: function (orderInfo, resolve, reject) {
        utility.request({
            type: 'POST',
            url: utility.getServerUrl('/orders'),
            data: orderInfo,
            success: resolve,
            error: reject
        })
    }
}
export {
    orderService
}