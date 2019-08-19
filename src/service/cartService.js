import {
    utility
} from 'util/util';

const cartService = {
    getCartCount: function (resolve, reject) {
        utility.request({
            method: 'POST',
            url: utility.getServerUrl('/user/checklogin.do'),
            success: resolve,
            error: reject
        });
    }
};
export {
    cartService
}