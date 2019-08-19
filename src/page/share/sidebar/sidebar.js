/*
 * @Author: Lucia 
 * @Date: 2019-08-08 12:11:40 
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-08-14 16:39:10
 */
import $ from 'jquery';
import './sidebar.css';
import '../../share/index';

function sideBarInit(menuName) {
    $(".sidebar-wrapper ." + menuName + " ").addClass('is-active').siblings().removeClass('is-active');
}

export {
    sideBarInit
};