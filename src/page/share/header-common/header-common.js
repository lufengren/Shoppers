/*
 * @Author: Lucia 
 * @Date: 2019-08-02 10:18:25 
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-08-30 09:45:42
 */

import './header-common.css';
import {
    utility
} from 'util/util';
import {
    userService
} from 'service/userService';
import {
    productService
} from 'service/productService';
import {
    cartService
} from 'service/cartService';

function headerCommonInit() {
    loadUserInfo();
    loadCartInfo();
    loadSearchKeyword();
    bindEvent();
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
    $('.search-button').click(function () {
        submitSearch();
    });
    $('.search-form input').keyup(function (e) {
        if (e.keyCode === 13) {
            submitSearch();
        }
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

// get searching keyword from url, then show it on input element
function loadSearchKeyword() {
    let keyword = utility.getUrlParamByKey('keyword');
    if (keyword) {
        $('.search-form input').val(keyword);
    }
}

function submitSearch() {
    let keyword = $.trim($('.search-form input').val());
    if (keyword) {
        window.location.href = `./product.html?keyword=${keyword}`;
    } else {
        utility.goHome();
    }
}
export {
    headerCommonInit
};