/*
 * @Author: Lucia 
 * @Date: 2019-08-08 15:45:43 
 * @Last Modified by:   Lucia 
 * @Last Modified time: 2019-08-08 15:45:43 
 */

import '../share/common.css';
import './message.css';
import {
    utility
} from 'util/util';

// get message type from url, switch class name to display different message
$(function () {
    let type = utility.getUrlParamByKey('type');
    $('.' + type + '-success').show();
});