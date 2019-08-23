/*
 * @Author: Lucia 
 * @Date: 2019-08-01 08:19:51 
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-08-21 15:02:47
 */

import './index.css';
import './carousel.css';
import '../share/index';
require('./carousel.js');
import $ from 'jquery';
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
    utility
} from 'util/util';

const indexPage = {
    init: function () {
        headerCommonInit();
        navBarInit();
        sideBarInit();
        this.carouselInit();
        this.bindEvent();

    },
    bindEvent: function () {
        $('.item').hover(function (e) {
            e.stopPropagation();
        });
    },
    carouselInit: function () {
        $('.slide-show-content').slick({
            dots: true,
            // infinite: true,
            // autoplay: true,
            // autoplaySpeed: 800,
            adaptiveHeight: true
        });
    }
}
// const template = '<div>{{name}}</div>';
// const data = {
//     name: 'Lucai'
// };
// utility.request({
//     url: 'https://picsum.photos/v2/list',

//     success: function (data, msg) {
//         console.log(data, msg);
//     },
//     error: function (msg) {
//         console.log(msg);
//     }
// });

$(() => {
    indexPage.init();
});