/*
 * @Author: Lucia 
 * @Date: 2019-08-27 10:53:05 
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-08-27 13:05:49
 */

import '../share/index';
import './productdetail.css';
import {
    MessageBoxInit
} from '../share/messagebox/messagebox';
import {
    productdetailTemplate
} from './productdetailTemplate';
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
    headerCommonInit
} from '../share/header-common/header-common';
import {
    navBarInit
} from '../share/navbar/navbar';


const productDetailPage = {
    data: utility.getUrlParamByKey('productid') || '',
    init: function () {
        this.loadProductDetail();
    },
    bindEvent: function () {

    },
    loadProductDetail: function () {
        if (!this.data) {
            utility.goHome();
        } else {
            productService.getProductById(this.data, (res) => {
                // let $productContentElement = $('.product-content');
                // $productContentElement.html('<div class="loading"> </div>');
                // let productdetailHtml = utility.renderHtml(productdetailTemplate, res);
                // $productContentElement.html(productdetailHtml);
            }, (errMsg) => {
                MessageBoxInit(errMsg);
            })
        }
    }
}
$(() => {
    productDetailPage.init();
})