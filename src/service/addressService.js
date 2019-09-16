import {
    utility
} from 'util/util';
const addressService = {
    getAddressList: function (resolve, reject) {
        utility.request({
            url: utility.getServerUrl('shipping/ShippingAddress'),
            data: {
                pageSize: 50
            },
            success: resolve,
            error: reject
        })
    },
    addAddress: function (addressInfo, resolve, reject) {
        utility.request({
            method: 'POST',
            url: utility.getServerUrl('/shipping/ShippingAddress'),
            data: JSON.stringify(addressInfo),
            contentType: 'application/json',
            success: resolve,
            error: reject
        })
    },
    updateAddress: function (addressInfo, id) {
        utility.request({
            method: 'PUT',
            url: utility.getServerUrl(`/shipping/ShippingAddress/${id}`),
            data: JSON.stringify(addressInfo),
            success: resolve,
            error: reject
        })
    },
    deleteAddress: function (id) {
        utility.request({
            method: 'DELETE',
            url: utility.getServerUrl(`/shipping/ShippingAddress/${id}`),
            success: resolve,
            error: reject
        })
    }
}
export {
    addressService
}