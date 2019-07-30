import $ from 'jquery';
import './style.css';

// function component() {
//     const element = document.createElement('div');
//     // Lodash, currently included via a script, is required for this line to work
//     element.classList.add('hello');
//     return element;
// }

// document.body.appendChild(component());
const dataExchange = require('util/util.js');

dataExchange.request({
    url: 'https://picsum.photos/v2/list',
    success: function (data, msg) {
        console.log(data, msg);
    },
    error: function (msg) {
        console.log(msg);
    }
});

$('body').html('hello');