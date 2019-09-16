import {
    utility
} from 'util/util';

const productService = {
    getProductList: function (searchData, resolve, reject) {
        utility.request({
            method: 'GET',
            url: utility.getServerUrl(`/products?keyword=${searchData.keyword}`),
            success: resolve,
            error: reject
        });
    },
    getProduct: function (id, resolve, reject) {
        utility.request({
            method: 'GET',
            url: utility.getServerUrl(`/products/${id}`),
            success: resolve,
            error: reject
        });
    }
};
export {
    productService
}