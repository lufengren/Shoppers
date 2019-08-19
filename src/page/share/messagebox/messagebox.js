/*
 * @Author: Lucia 
 * @Date: 2019-08-16 12:36:33 
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-08-16 13:08:26
 */
import './messagebox.css';

function MessageBoxInit(message) {
    $('.message-box').show().find('p').text(message);
    setTimeout(() => {
        $('.message-box').hide();
    }, 2000);
}
export {
    MessageBoxInit
}