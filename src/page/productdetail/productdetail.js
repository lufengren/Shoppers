/*
 * @Author: Lucia 
 * @Date: 2019-08-27 10:53:05 
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-09-16 12:23:46
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
    productService
} from 'service/productService';
import {
    cartService
} from 'service/cartService';
import {
    headerCommonInit
} from '../share/header-common/header-common';
import {
    navBarInit
} from '../share/navbar/navbar';


const productDetailPage = {
    data: {
        id: utility.getUrlParamByKey('productid') || ''
    },
    init: function () {
        headerCommonInit();
        navBarInit();
        this.loadProductDetail();
        this.bindEvent();
    },
    bindEvent: function () {
        let _this = this;
        // bind preview image event
        $(document).on('mouseenter', '.thumbnail img', function () {
            let imageUrl = $(this).attr('src'),
                bigImgSrc;
            bigImgSrc = imageUrl.replace(100, 500);
            $('.main-img img').attr('src', bigImgSrc);
        });
        // bind plus or minus product event
        $(document).on('click', '.action', function () {
            let type = $(this).hasClass('plus') ? 'plus' : 'minus',
                $amount = $('.amount'),
                currValue = parseInt($amount.val()),
                minValue = 1,
                // maxValue = _this.data.detailInfo.stock || 1;
                maxValue = 10;
            if (type === 'plus') {
                $amount.val(currValue < maxValue ? currValue + 1 : maxValue);
            } else if (type === 'minus') {
                $amount.val(currValue > minValue ? currValue - 1 : minValue);
            }
        });
        // bind 'add to cart' event
        $(document).on('click', '.add-cart-btn', function () {
            cartService.addToCart({
                productId: _this.data.id,
                count: $('.amount').val()
            }, (res) => {
                window.location.href = './result.html?type=cart-add';
            }, (errMsg) => {
                MessageBoxInit(errMsg.statusText);
            });
        });
    },
    loadProductDetail: function () {
        if (!this.data.id) {
            utility.goHome();
        } else {
            this.loadDetail();
        }
    },
    loadDetail: function () {
        let $productContent = $('.product-content');
        let _this = this;
        let productdetailHtml = '';
        $productContent.html('<div class="loading"></div>');
        productService.getProduct(this.data.id, (res) => {
            _this.filter(res);
            _this.data.productDetail = res;
            productdetailHtml = utility.renderHtml(productdetailTemplate, res);
            $productContent.html(productdetailHtml);
        }, (errMsg) => {
            $productContent.html('<p class="error-message">can not find the prodct');
        })
    },
    filter: function (data) {
        data.subImages = data.subImages.split(',');
    }
}
$(() => {
    productDetailPage.init();
})