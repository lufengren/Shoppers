/*
 * @Author: Lucia 
 * @Date: 2019-08-14 10:17:36 
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-08-14 16:00:36
 */

import '../share/index';
import './order.css';

import {
    headerCommonInit
} from '../share/header-common/header-common';
import {
    navBarInit
} from '../share/navbar/navbar';
import {
    sideBarInit
} from '../share/sidebar/sidebar';

headerCommonInit();
navBarInit();
sideBarInit('order');