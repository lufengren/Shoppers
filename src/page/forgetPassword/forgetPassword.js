/*
 * @Author: Lucia 
 * @Date: 2019-08-13 16:21:46 
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-08-14 10:20:52
 */


import './forgetPassword.css';
import '../share/index';
import {
    utility
} from 'util/util';
import {
    userService
} from 'service/userService';

const forgetPasswordPage = {
    init: function () {
        this.bindEvent();
    },
    bindEvent: function () {
        $('.forgetPassword-btn').click(function () {
            let email = $.trim($('.email').val());
            userService.passwordReset(email, (res) => {
                $('.password-reset-content').hide();
                $('.password-reset-msg').show();
            }, (errMsg) => {
                utility.errorMsg(errMsg);
            });
        });
    }
};

$(() => {
    forgetPasswordPage.init();
});