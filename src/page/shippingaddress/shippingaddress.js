/*
 * @Author: Lucia 
 * @Date: 2019-08-15 14:45:30 
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-08-16 13:18:13
 */

import '../share/index';
import './shippingaddress.css';
import '../share/messagebox/messagebox';
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

const shippingAddressTemplate = require('./shippingAddressTemplate.string');
const shippingAddressPage = {
    init: function () {
        // headerCommonInit();
        navBarInit();
        sideBarInit('shippingaddress');
        this.loadShippingAddressInfo();
        this.bindEvent();
    },
    bindEvent: function () {
        let _this = this;
        $(document).on('click', '.shipping-address .edit', function () {
            $('.shipping-address input').removeAttr('disabled');
            $('#state').addClass('hide').siblings('select').removeClass('hide').val($('#state').val());
            $('#firstname').focus();
            $('.save-btn').removeAttr('disabled');
        });
        $('.save-btn').click(function () {
            let formData = {
                firstname: $.trim($('#firstname').val()),
                lastname: $.trim($('#lastname').val()),
                phone: $.trim($('#phone').val()),
                address: $.trim($('#address').val()),
                city: $.trim($('#city').val()),
                state: $.trim($('.shipping-address-detail select').val()),
                zipcode: $.trim($('#zipcode').val()),
            }
            let result = _this.validate(formData);
            if (result.status) {
                formData = JSON.stringify(formData);
                userService.updateShippingAddressInfo(formData, (res) => {
                    $('.shipping-address-detail input').prop('disabled', true);
                    $('#firstname').attr('value', res.firstname);
                    $('#lastname').attr('value', res.lastname);
                    $('#phone').attr('value', res.phone);
                    $('#address').attr('value', res.address);
                    $('#city').attr('value', res.city);
                    $('.shipping-address-detail select').addClass('hide').siblings('input').removeClass('hide').val(res.state);
                    $('#zipcode').attr('value', res.zipcode);
                    $('.save-btn').prop('disabled', true);
                    MessageBoxInit('update shipping address successfully');
                }, (errMsg) => {
                    // console.log(errMsg);
                    utility.errorMsg(errMsg);
                });
            } else {
                // utility.errorMsg(result.message);
                MessageBoxInit(result.message);
            }
        });
    },
    loadShippingAddressInfo: function () {
        userService.getShippingAddressInfo((res) => {
            let resultHtml = utility.renderHtml(shippingAddressTemplate, res);
            $('.shipping-address-content').html(resultHtml);
        }, (errMsg) => {
            utility.errorMsg(errMsg);
        });
    },
    validate(formData) {
        let result = {
            status: false,
            message: ''
        };
        if (!utility.validate(formData.firstname, 'required')) {
            result.message = 'firstname is required';
            return result;
        }
        if (!utility.validate(formData.lastname, 'required')) {
            result.message = 'lastname is required';
            return result;
        }
        if (!utility.validate(formData.phone, 'phone')) {
            result.message = 'phone format is incorrect';
            return result;
        }
        if (!utility.validate(formData.address, 'required')) {
            result.message = 'address is required';
            return result;
        }
        if (!utility.validate(formData.city, 'required')) {
            result.message = 'city is required';
            return result;
        }
        if (!utility.validate(formData.state, 'required')) {
            result.message = 'state is required';
            return result;
        }
        if (!utility.validate(formData.zipcode, 'required')) {
            result.message = 'zipcode is required';
            return result;
        }
        result.status = true;
        result.message = 'validate is success';
        return result;
    }
};

$(() => {
    shippingAddressPage.init();
});