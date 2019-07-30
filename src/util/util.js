/*
 * @Author: Lucia
 * @Date: 2019-05-26 16:21:30
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-05-26 19:25:22
 */
'use strict';
const conf = {
    host: ''
}
const utils = {
    request: function (param) {
        const _this = this;
        $.ajax({
            type: param.method || 'get',
            url: param.url || '',
            dataType: param.type || 'json',
            data: param.data || '',
            success: function (res) {
                // console.log(res);
                if (res.status === 0) {
                    typeof param.success === 'function' && param.success(res.data, res.msg);
                }
                else if (res.status === 10) {
                    _this.doLogin();
                }
                else if (res.status === 1) {
                    typeof param.error === 'function' && param.error(res.msg);
                }
            },
            error: function (err) {
                typeof param.error === 'function' && param.error(err.statusText);
            }
        });
    },
    // redirect to login page
    doLogin: function () {
        window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
    },
    getSeverUrl(path) {
        return conf.host + path;
    },
    getUrlParamByKeyword(keyword) {
        let reg = new RegExp('(^|&)' + name + '= ([^&]*)(&|$)');
        let res = window.location.search.substr(1).match(reg);
        return res ? decodeURIComponent(res[2]) : null;
    }
};
module.exports = utils;
