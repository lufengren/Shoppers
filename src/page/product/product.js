/*
 * @Author: Lucia 
 * @Date: 2019-08-20 17:05:04 
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-08-22 22:06:28
 */

import '../share/index';
import './product.css';

import {
    utility
} from 'util/util';
import {
    Pagination
} from '../../util/pagination/pagination';
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


const productTemplate = require('./productTemplate.string');
const productPage = {
    searchData: {
        keyword: utility.getUrlParamByKey('keyword') || '',
        categoryId: utility.getUrlParamByKey('categoryId') || '',
        orderBy: utility.getUrlParamByKey('orderBy') || 'default',
        pageNumber: utility.getUrlParamByKey('pageNumber') || 1,
        pageSize: utility.getUrlParamByKey('pageSize') || 20
    },
    init: function () {
        headerCommonInit();
        navBarInit();
        this.loadProducts(this.searchData);
        this.bindEvent();
    },
    bindEvent: function () {
        let _this = this;
        $('.sort-by-default').click(function () {
            let $this = $(this);
            // product lists should be showed from page one when hit default button or price order button
            _this.searchData.pageNumber = 1;
            if (!$this.hasClass('active')) {
                $this.addClass('active');
            }
            $this.siblings('.sort-by-price').removeClass('active');
            _this.searchData.orderBy = 'default';
            _this.loadProducts();
        });
        $('.sort-by-price').click(function () {
            let $this = $(this);
            _this.searchData.pageNumber = 1;
            let $sortDownElement = $this.find('.fa-sort-down');
            let $sortUpElement = $this.find('.fa-sort-up');
            if (!$this.hasClass('active')) {
                $this.addClass('active');
            }
            $this.siblings('.sort-by-default').removeClass('active');
            if (!$sortDownElement.hasClass('sort-flag')) {
                $sortDownElement.addClass('sort-flag');
                $sortUpElement.removeClass('sort-flag');
                _this.searchData.orderBy = 'asc';
            } else {
                $sortDownElement.removeClass('sort-flag');
                $sortUpElement.addClass('sort-flag');
                _this.searchData.orderBy = 'desc';
            }
            _this.loadProducts();
        });
    },
    loadProducts: function () {
        let _this = this;
        let $productContentElement = $('.product-content');
        $productContentElement.html('<div class="loading"> </div>');
        productService.getProducts(this.searchData, (res) => {
            let productHtml = utility.renderHtml(productTemplate, {
                lists: res
            });
            $('.product-content').html(productHtml);
            res = {
                pages: 8,
                pageNumber: 4,
                prePage: 3,
                nextPage: 5,
                hasPreviousPage: true,
                hasNextPage: true,
            }
            _this.loadPagination(res);
        }, (errMsg) => {
            utility.errorMsg(errMsg);
        });
    },
    // accept pagenation prama then render pagenation html
    loadPagination: function (res) {
        let productPagination = new Pagination();
        productPagination.render({
            pages: res.pages,
            pageNumber: res.pageNumber,
            prePage: res.prePage,
            nextPage: res.nextPage,
            hasPreviousPage: res.hasPreviousPage,
            hasNextPage: res.hasNextPage,
            container: $('.pagination'),
            clickEvent: function (pageNumber) {
                console.log(pageNumber);
                this.searchData.pageNumber = pageNumber;
                this.loadProducts();
            }
        })
    }
}

$(() => {
    productPage.init();
});