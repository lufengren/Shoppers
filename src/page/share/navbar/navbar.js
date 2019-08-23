/*
 * @Author: Lucia 
 * @Date: 2019-08-06 14:32:15 
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-08-19 13:06:55
 */

import './navbar.css';

function navBarInit() {
    bindEvent();
}

function bindEvent() {

    $('.responsive-menu').click(() => {
        $('.responsive-menu ul').toggle();
    });
}

export {
    navBarInit
}