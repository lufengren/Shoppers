/*
 * @Author: Lucia 
 * @Date: 2019-08-08 12:11:40 
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-08-08 14:11:40
 */
import $ from 'jquery';
import './sidebar.css';

function clickEvent() {
    $('.sidebar-wrapper ul li').click(function () {
        console.log('ccc');
        console.log($(this));
        $(this).addClass('active').siblings().removeClass('active');
    })
    // $('.sidebar-wrapper ul').on('çlick', 'li', function () {
    //     console.log('ccc');
    //     console.log($(this));
    //     $(this).addClass('active').siblings().removeClass('active');
    // });
}

function init() {
    clickEvent();
}
export {
    init
}