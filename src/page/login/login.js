/*
 * @Author: Lucia 
 * @Date: 2019-08-12 14:46:35 
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-08-14 10:16:58
 */

import './login.css';
import '../share/index';
import {
    utility
} from 'util/util';
import {
    userService
} from 'service/userService';

const loginPage = {
    init: function () {
        this.bindEvent();
    },
    bindEvent: function () {
        let isShowPassword = false;
        // hit submit button to sign in
        $('.login-submit').click(() => {
            this.submit();
        });
        // hit enter key to sign in
        $('.login-item').keyup((e) => {
            if (e.keyCode === 13) {
                this.submit();
            }
        });
        // hide or show password
        $('.password-img').click(function () {
            if (!isShowPassword) {
                $(this).find('svg').attr('data-icon', 'eye');
                $(this).prev().attr('type', 'text');
                isShowPassword = true;
            } else {
                $(this).find('svg').attr('data-icon', 'eye-slash');
                $(this).prev().attr('type', 'password');
                isShowPassword = false;
            }
        });
    },
    submit: function () {
        let formData = {
            email: $.trim($('.email').val()),
            password: $.trim($('.password').val())
        };
        let result = this.validate(formData);
        if (result.status) {
            userService.login(formData, (res) => {
                window.location.href = utility.getUrlParamByKey('redirct') || './index.html';
            }, (errMsg) => {
                $('.error-wrapper').show().find('.error-msg').text(errMsg);
            });
        } else {
            $('.error-wrapper').show().find('.error-msg').text(result.message);
        }
    },
    validate: function (formData) {
        let result = {
            status: false,
            message: ''
        };
        if (!utility.validate(formData.email, 'required')) {
            result.message = 'username is required';
            return result;
        }
        if (!utility.validate(formData.password, 'required')) {
            result.message = 'password is required';
            return result;
        }
        result.status = true;
        result.message = 'validate is success';
        return result;
    }
};
$(() => {
    loginPage.init();
});