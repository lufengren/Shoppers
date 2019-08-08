import $ from 'jquery';
import './index.css';
import '../share/common.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import '../share/header-common/header-common';
import {
    init
} from '../share/sidebar/sidebar';
import {
    utility
} from 'util/util';
import {
    navbar
} from '../share/navbar/navbar';

const template = '<div>{{name}}</div>';
const data = {
    name: 'Lucai'
};
init();
utility.request({
    url: 'https://picsum.photos/v2/list',

    success: function (data, msg) {
        console.log(data, msg);
    },
    error: function (msg) {
        console.log(msg);
    }
});
// console.log(utility.renderHtml(template, data));

// $('body').html('hello');
navbar.menuClick();