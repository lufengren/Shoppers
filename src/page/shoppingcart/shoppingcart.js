/*
 * @Author: Lucia 
 * @Date: 2019-09-04 16:05:05 
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-09-09 16:10:38
 */

import '../share/index';
import './shoppingcart.css';
import {
    MessageBoxInit
} from '../share/messagebox/messagebox';
import {
    shoppingcartTemplate
} from './shoppingcartTemplate';
import {
    utility
} from 'util/util';
import {
    cartService
} from 'service/cartService';
import {
    headerCommonInit
} from '../share/header-common/header-common';
import {
    navBarInit
} from '../share/navbar/navbar';

const shoppingcartPage = {
    init: function () {
        headerCommonInit();
        navBarInit();
        this.bindEvent();
    },
    bindEvent: function () {
        // increse or decrease product amount
        $(document).on('click', '.action', function () {
            let $this = $(this),
                $amount = $('.amount'),
                currCount = parseInt($amount.val()),
                type = $this.hasClass('plus') ? 'plus' : 'minus',
                productId = $this.parents('.table').data('productid'),
                maxCount = parseInt($amount.data('max'));
            if (type === 'plus') {
                currCount = currCount + 1;
                if (currCount >= maxCount) {
                    currCount = maxCount;
                    MessageBoxInit('Reach the stock limit');
                }
            } else if (type === 'minus') {
                currCount = currCount - 1;
                if (currCount < 1) {
                    currCount = 1;
                }
            }
            $amount.attr('value', currCount);
            // update cart product infomation
            cartService.updateCartProduct({
                count: currCount,
                productId: productId,
            }, function (res) {
                _this.renderCart(res);
            }, function (errMsg) {
                MessageBoxInit(errMsg.statusText);
            });
        });
        // delete product from shopping cart list
        $(document).on('click', '.delete', function () {
            if (window.confirm('Are you sure to delete this product ?')) {
                let productId = $this.parents('.table').data('productid');
                _this.deleteCartProduct(productId);
            }
        });
        // submit to checkout
        $(document).on('click', '.checkout', function () {
            window.location.href = './checkout.html';
        });
    },
    loadCart: function () {
        let _this = this;
        // get cart list from server
        cartService.getCartList((res) => {
            _this.renderCart(res);
        }, (errMsg) => {
            MessageBoxInit(errMsg.statusText);
        })
    },
    renderCart: function (data) {
        this.filter(data);
        this.data.cartInfo = data;
        var cartHtml = utility.renderHtml(shoppingcartTemplate, data);
        $('.cart-content').html(cartHtml);
        // update cart count in header
        headerCommonInit();
    },
    filter: function (data) {
        data.notEmpty = !!data.cartProductVoList.length;
    },
    deleteCartProduct: function (productId) {
        let _this = this;
        cartService.deleteCartProduct(productId, (res) => {
            _this.renderCart(res);
        }, (errMsg) => {
            MessageBoxInit(errMsg.statusText);
        })
    }
}
$(() => {
    shoppingcartPage.init();
})