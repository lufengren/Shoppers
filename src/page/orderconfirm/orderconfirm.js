/*
 * @Author: Lucia 
 * @Date: 2019-09-09 15:30:37 
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-09-11 13:42:22
 */

import '../share/index';
import './orderconfirm.css';
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
    utility
} from 'util/util';
import {
    addressService
} from 'service/addressService';
import {
    orderService
} from 'service/orderService';
import {
    productlistTemplate
} from './productlistTemplate';
import {
    addresslistTemplate
} from './addresslistTemplate';
import {
    orderModal
} from './ordermodal';

const orderConfirmPage = {
    data: {
        addressId: null
    },
    init: function () {
        headerCommonInit();
        navBarInit();
        // this.loadAddressList();
        // this.loadProductList();
        this.bindEvent();
    },
    bindEvent: function () {
        let _this = this;
        // add new address
        $(document).on('click', '.add-icon', function () {
            orderModal.show({
                isUpdated: false,
                onSuccess: function () {
                    _this.loadAddressList();
                }
            });
        })
        // change selected address style
        $(document).on('click', '.address-list', function () {
            $(this).addClass('active-style').siblings('.address-list').removeClass('active-style');
            _this.data.addressId = $(this).data('addressid');
        });
        // submit order then get order number and pass it to payment page
        $(document).on('click', '.checkout', function () {
            let addressId = _this.data.addressId;
            if (addressId) {
                orderService.submitOrder({
                    addressId: addressId
                }, (res) => {
                    window.location.href(`./payment.html?orderNumber=${res.orderNo}`);
                }, (errMsg) => {
                    MessageBoxInit(errMsg.statusText);
                })
            } else {
                MessageBoxInit('please choose address')
            }
        });

    },
    loadAddressList: function () {
        addressService.getAddressList((res) => {
            let addressListHtml = utility.renderHtml(addresslistTemplate, res);
            $('.order-content-address').html(addressListHtml);
        }, (errMsg) => {
            MessageBoxInit(errMsg.statusText);
        })
    },
    loadProductList: function () {
        orderService.getProductList((res) => {
            let productListHtml = utility.renderHtml(productlistTemplate, res);
            $('.order-content-address').html(productListHtml);
        }, (errMsg) => {
            MessageBoxInit(errMsg.statusText);
        })
    }
}

$(() => {
    orderConfirmPage.init();
})