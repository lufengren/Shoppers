/*
 * @Author: Lucia 
 * @Date: 2019-08-01 08:19:51 
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-08-14 10:27:35
 */

import $ from 'jquery';
import './index.css';
import '../share/index';

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


const template = '<div>{{name}}</div>';
const data = {
    name: 'Lucai'
};
utility.request({
    url: 'https://picsum.photos/v2/list',

    success: function (data, msg) {
        console.log(data, msg);
    },
    error: function (msg) {
        console.log(msg);
    }
});

headerCommonInit();
navBarInit();
sideBarInit();