/*
 * @Author: Lucia 
 * @Date: 2019-08-06 14:32:15 
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-08-07 14:26:05
 */

import './navbar.css';

const navbar = {
    menuClick: () => {
        $('.responsive-menu').click(() => {
            console.log('kquery tesy');
            $('.responsive-menu ul').toggle();
        });
    }
};
export {
    navbar
}