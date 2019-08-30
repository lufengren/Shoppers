/*
 * @Author: Lucia
 * @Date: 2019-05-26 16:21:30
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-08-27 12:06:28
 */
'use strict';
const conf = {
    host: 'http://localhost:3000'
};
var hogan = require('hogan.js');
const utility = {
    request: function (param) {
        const _this = this;
        $.ajax({
            type: param.method || 'get',
            url: param.url || '',
            dataType: param.type || 'json',
            data: param.data || '',
            success: function (res) {
                // get correct response
                if (res.status === 0) {
                    typeof param.success === 'function' && param.success(res.data, res.msg);
                }
                // redirect to longin page 
                else if (res.status === 10) {
                    _this.doLogin();
                }
                // the request is successfull, but the response has something wrong
                else if (res.status === 1) {
                    typeof param.error === 'function' && param.error(res.msg);
                }
            },
            // the request is failed
            error: function (err) {
                typeof param.error === 'function' && param.error(err.statusText);
            }
        });
    },
    // if server address is changed, only need to change the host name 
    getServerUrl: function (path) {
        return conf.host + path;
    },
    getUrlParamByKey: function (key) {
        let reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
        let res = window.location.search.substr(1).match(reg);
        return res ? decodeURIComponent(res[2]) : null;
    },
    successMsg: function (msg) {
        alert(msg || 'success');
    },
    errorMsg: function (msg) {
        alert(msg || 'something is wrong');
    },
    validate: function (value, type) {
        value = $.trim(value);
        if (type === 'required') {
            return !!value;
        }
        if (type === 'phone') {
            // return / ^\d{3}\d{3}\d{4}$/.test(value);
            let pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
            return pattern.test(value);
        }
        if (type === 'email') {
            return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
        }
    },
    // put complie method and render method together
    renderHtml: function (template, data) {
        let compiledTemplate = hogan.compile(template);
        let result = compiledTemplate.render(data);
        return result;
    },
    doLogin: function () {
        window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
    },
    goHome: function () {
        window.location.href = './index.html';
    }
};

export {
    utility
};