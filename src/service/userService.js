import {
    utility
} from 'util/util';

const userService = {
    checkLogin: (resolve, reject) => {
        utility.request({
            method: 'POST',
            url: utility.getServerUrl('/users/check_login.do'),
            success: resolve,
            error: reject
        });
    },
    login: (userInfo, resolve, reject) => {
        utility.request({
            method: 'POST',
            url: utility.getServerUrl('/users/login.do'),
            data: userInfo,
            success: resolve,
            error: reject
        });
    },
    getUserInfo: (resolve, reject) => {
        // utility.request({
        //     method: 'POST',
        //     url: utility.getServerUrl('/users/get_user_info.do'),
        //     success: resolve,
        //     error: reject
        // });
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/users/1',
            success: resolve,
            error: reject
        });
    },
    updateUserInfo: (userInfo, resolve, reject) => {
        // utility.request({
        //     method: 'POST',
        //     url: utility.getServerUrl('/users/update_user_info.do'),
        //     data: userInfo,
        //     success: resolve,
        //     error: reject
        // });
        $.ajax({
            type: 'put',
            url: utility.getServerUrl('/users/1'),
            data: userInfo,
            dataType: 'json',
            contentType: 'application/json',
            success: resolve,
            error: reject
        })
    },
    checkUsername: (username, resolve, reject) => {
        utility.request({
            method: 'POST',
            url: utility.getServerUrl('/users/check_username.do'),
            data: username,
            success: resolve,
            error: reject
        });
    },
    register: (userinfo, resolve, reject) => {
        utility.request({
            method: 'POST',
            url: utility.getServerUrl('/users/register.do'),
            data: userinfo,
            success: resolve,
            error: reject
        });
    },
    passwordReset: (email, resolve, reject) => {
        utility.request({
            method: 'POST',
            url: utility.getServerUrl('/users/reset_password.do'),
            data: email,
            success: resolve,
            error: reject
        });
    },
    getShippingAddressInfo: (resolve, reject) => {
        // utility.request({
        //     method: 'POST',
        //     url: utility.getServerUrl('/users/get_shipping_address_info.do'),
        //     success: resolve,
        //     error: reject
        // });
        $.ajax({
            type: 'get',
            url: utility.getServerUrl('/shippings/1'),
            success: resolve,
            error: reject
        })
    },
    updateShippingAddressInfo: (shippingAddressInfo, resolve, reject) => {
        // utility.request({
        //     method: 'POST',
        //     url: utility.getServerUrl('/users/update_shipping_address.do'),
        //     data: shippingAddressInfo,
        //     success: resolve,
        //     error: reject
        // });
        $.ajax({
            type: 'put',
            url: utility.getServerUrl('/shippingss/1'),
            data: shippingAddressInfo,
            dataType: 'json',
            contentType: 'application/json',
            success: resolve,
            error: reject
        })
    },
    logout: function (resolve, reject) {
        utility.request({
            method: 'POST',
            url: utility.getServerUrl('/users/logout.do'),
            success: resolve,
            error: reject
        });
    }
};
export {
    userService
}