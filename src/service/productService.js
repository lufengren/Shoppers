import {
    utility
} from 'util/util';

const productService = {
    getProducts: function (searchData, resolve, reject) {
        // utility.request({
        //     method: 'GET',
        //     url: utility.getServerUrl(`/products?keyword=${keyword}`),
        //     success: resolve,
        //     error: reject
        // });
        $.ajax({
            type: 'get',
            url: `http://localhost:3000/products?name_like=${searchData.keyword}`,
            success: resolve,
            error: reject
        });
    }
};
export {
    productService
}