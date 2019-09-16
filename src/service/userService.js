import {
    utility
} from 'util/util';

const userService = {
    checkLogin: (resolve, reject) => {
        utility.request({
            method: 'POST',
            url: utility.getServerUrl('/users/checklogin'),
            success: resolve,
            error: reject
        });
    },
    login: (userInfo, resolve, reject) => {
        utility.request({
            method: 'POST',
            url: utility.getServerUrl('/users/login'),
            data: JSON.stringify(userInfo),
            success: resolve,
            error: reject
        });
    },
    getUser: (resolve, reject) => {
        utility.request({
            method: 'GET',
            url: utility.getServerUrl('/users/user'),
            success: resolve,
            error: reject
        });
    },
    updateUserInfo: (userInfo, resolve, reject) => {
        utility.request({
            method: 'PUT',
            url: utility.getServerUrl('/users/user'),
            contentType: 'application/json',
            data: JSON.stringify(userInfo),
            success: resolve,
            error: reject
        });
    },
    checkUsername: (userInfo, resolve, reject) => {
        utility.request({
            method: 'POST',
            url: utility.getServerUrl('/users/username'),
            contentType: 'application/json',
            data: JSON.stringify(userInfo),
            success: resolve,
            error: reject
        });
    },
    register: (userinfo, resolve, reject) => {
        utility.request({
            method: 'POST',
            url: utility.getServerUrl('/users/user'),
            contentType: 'application/json',
            data: JSON.stringify(userinfo),
            success: resolve,
            error: reject
        });
    },
    passwordReset: (userInfo, resolve, reject) => {
        utility.request({
            method: 'PATCH',
            url: utility.getServerUrl('/users/user'),
            contentType: 'application/json',
            data: JSON.stringify(userinfo),
            success: resolve,
            error: reject
        });
    },
    logout: function (resolve, reject) {
        utility.request({
            method: 'POST',
            url: utility.getServerUrl('/users/logout'),
            success: resolve,
            error: reject
        });
    }
};
export {
    userService
}