/*
 * @Author: Lucia 
 * @Date: 2019-08-14 10:17:50 
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-08-29 17:38:52
 */

import '../share/index';
import './profile.css';

import {
    utility
} from 'util/util';
import {
    userService
} from 'service/userService';
import {
    MessageBoxInit
} from '../share/messagebox/messagebox';
import {
    headerCommonInit
} from '../share/header-common/header-common';
import {
    navBarInit
} from '../share/navbar/navbar';
import {
    sideBarInit
} from '../share/sidebar/sidebar';
import {
    profileTemplate
} from './profileTemplate';

const profilePage = {
    init: function () {
        // headerCommonInit();
        navBarInit();
        sideBarInit('profile');
        this.loadUserInfo();
        this.bindEvent();
    },
    bindEvent: function () {
        let _this = this;
        // hit edit button to modify user infomation
        $(document).on('click', '.account-info .edit', function () {
            $('input:not(.no-edit)').removeAttr('disabled');
            $('#username').focus();
            $('.save-btn').removeAttr('disabled');
        });
        // hit save button to  save updated user infomation 
        $('.save-btn').click(function () {
            let formData = {
                username: $.trim($('#username').val()),
                password: $.trim($('#password').val()),
                email: $('#email').val()
            }
            let result = _this.validate(formData);
            if (result.status) {
                formData = JSON.stringify(formData);
                userService.updateUserInfo(formData, (res) => {
                    $('.profile input').prop('disabled', true);
                    $('#username').attr('value', res.username);
                    $('#password').attr('value', res.password);
                    $('#email').attr('value', res.email);
                    $('.save-btn').prop('disabled', true);
                    MessageBoxInit('update profile successfully');
                }, (errMsg) => {
                    utility.errorMsg(errMsg);
                });
            } else {
                // utility.errorMsg(result.message);
                MessageBoxInit(result.message);
            }
        });
    },
    loadUserInfo: function () {
        userService.getUserInfo((res) => {
            let resultHtml = utility.renderHtml(profileTemplate, res);
            $('.profile-content').html(resultHtml);
        }, (errMsg) => {
            utility.errorMsg(errMsg);
        });
    },
    validate(formData) {
        let result = {
            status: false,
            message: ''
        };
        if (!utility.validate(formData.username, 'required')) {
            result.message = 'username is required';
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
    profilePage.init();
});