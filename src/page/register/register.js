/*
 * @Author: Lucia 
 * @Date: 2019-08-12 16:08:11 
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-08-15 13:25:23
 */

import './register.css';
import '../share/index';
import {
    utility
} from 'util/util';
import {
    userService
} from 'service/userService';

const registerPage = {
    init: function () {
        this.bindEvent();
    },
    bindEvent: function () {
        let isShowPassword = false;
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
        // validate username asynchronously
        $('.username').blur(function () {
            let formError = $('.error-wrapper');
            let username = $.trim($(this).val());
            if (!username) return;
            userService.checkUsername(username, (res) => {
                formError.hide();
            }, (errMsg) => {
                formError.show(errMsg);
            });
        });

        $('.register-btn').click(() => {
            this.submit();
        });
        // hit enter key to sign up
        $('.register-item').keyup((e) => {
            if (e.keyCode === 13) {
                this.submit();
            }
        });
    },
    submit: function () {
        let formError = $('.error-wrapper');
        let formData = {
            username: $.trim($('.username').val()),
            password: $.trim($('.password').val()),
            email: $.trim($('.email').val())
        };
        let result = this.validate(formData);
        if (result.status) {
            userService.register(formData, (res) => {
                window.location.href = './message.html?type=register';
            }, (errMsg) => {
                formError.show().find('.error-msg').text(errMsg);
            });
        } else {
            formError.show().find('.error-msg').text(result.message);
        }
    },
    validate: function (formData) {
        let result = {
            status: false,
            message: ''
        };
        if (!utility.validate(formData.username, 'required')) {
            result.message = 'username is required';
            return result;
        }
        if (!utility.validate(formData.email, 'email')) {
            result.message = 'email is incorrect';
            return result;
        }
        if (!utility.validate(formData.password, 'required')) {
            result.message = 'password is required';
            return result;
        }
        if (formData.password.length < 6) {
            result.message = 'password no less than 6';
            return result;
        }
        result.status = true;
        result.message = 'validate is success';
        return result;
    }
};
$(() => {
    registerPage.init();
})