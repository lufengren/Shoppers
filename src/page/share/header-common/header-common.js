/*
 * @Author: Lucia 
 * @Date: 2019-08-02 10:18:25 
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-08-14 11:06:48
 */

import './header-common.css';
import {
    utility
} from 'util/util';
import {
    userService
} from 'service/userService';
import {
    cartService
} from 'service/cartService';

function headerCommonInit() {
    bindEvent();
    loadUserInfo();
    loadCartInfo();
}

function bindEvent() {
    $('.sign-in').click(function () {
        utility.doLogin();
    });
    $('.sign-up').click(function () {
        window.location.href = './register.html';
    });
    $('.username').click(function () {
        window.location.href = './profile.html';
    });
    $('.logout').click(function () {
        userService.logout((res) => {
            window.location.reload();
        }, (errMsg) => {
            utility.errorMsg(errMsg);
        });
    });
}

function loadUserInfo() {
    userService.checkLogin((res) => {
        $('.not-login').hide().siblings('.login').show().find('.username').text(res.username);
    }, (errMsg) => {
        // do nothing
    });
}

function loadCartInfo() {
    cartService.getCartCount((res) => {
        $('.cart').text(res || 0);
    }, (errMsg) => {
        $('.cart').text(0);
    });
}
export {
    headerCommonInit
};


// const headerCommonPage = {
//     init: function () {
//         this.bindEvent();
//         this.loadUserInfo();
//         this.loadCartInfo();
//         return this;
//     },
//     bindEvent: function () {
//         $('.sign-in').click(function () {
//             utility.doLogin();
//         });
//         $('.sign-up').click(function () {
//             window.location.href = './register.html';
//         });
//         $('.logout').click(function () {
//             userService.logout((res) => {
//                 window.location.reload();
//             }, (errMsg) => {
//                 utility.errorMsg(errMsg);
//             });
//         });
//     },
//     loadUserInfo: function () {
//         userService.checkLogin((res) => {
//             $('.not-login').hide().siblings('.login').show().find('.username').text(res.username);
//         }, (errMsg) => {
//             // do nothing
//         });
//     },
//     loadCartInfo: function () {
//         cartService.getCartCount((res) => {
//             $('cart').text(res || 0);
//         }, (errMsg) => {
//             $('cart').text(0);
//         });
//     }
// };