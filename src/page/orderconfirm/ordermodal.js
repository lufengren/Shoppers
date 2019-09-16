/*
 * @Author: Lucia 
 * @Date: 2019-09-11 09:56:38 
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-09-14 12:49:18
 */

import '../share/index';
import {
    MessageBoxInit
} from '../share/messagebox/messagebox';
import {
    utility
} from 'util/util';
import {
    addressService
} from 'service/addressService';
import {
    orderModalTemplate
} from './ordermodalTemplate';

const orderModal = {
    show: function (option) {
        this.$modal = $('.modal-wrapper');
        this.renderModal(option);
        this.bindEvent();
    },
    hide: function () {

    },
    renderModal: function (option) {
        this.option = option;
        let orderModalHtml = utility.renderHtml(orderModalTemplate, option);
        this.$modal.html(orderModalHtml);
    },
    bindEvent: function () {
        let _this = this;
        this.$modal.find('.submit-address').click(function () {
            let addressFormData = _this.getAddressFormData();
            // let addressFormDataToJson = JSON.stringify(addressFormData.result);
            // console.log(addressFormDataToJson);
            // add new address
            if (!_this.option.isUpdated && addressFormData.isValidated) {
                addressService.addAddress(addressFormData.result, (res) => {
                    _this.hide();
                    MessageBoxInit('add new address successfully');
                    typeof _this.option.onSuccess === 'function' &&
                        _this.option.onSuccess();
                }, (errMsg) => {
                    console.log(errMsg);
                    MessageBoxInit(errMsg);
                })
            }
            // update address 
            else if (this.option.isUpdated && addressFormData.isValidated) {
                addressService.updateAddress(addressFormDataToJson, (res) => {
                    _this.hide();
                    MessageBoxInit('update address successfully');
                    typeof _this.option.onSuccess === 'function' &&
                        _this.option.onSuccess();
                }, (errMsg) => {
                    MessageBoxInit(errMsg);
                })
            }
        })
    },
    getAddressFormData: function () {
        let addressFormData = {},
            validateResult = {
                isValidated: false,
            }
        addressFormData.FirstName = $.trim(this.$modal.find('#firstname').val());
        addressFormData.LastName = $.trim(this.$modal.find('#lastname').val());
        addressFormData.Phone = $.trim(this.$modal.find('#phone').val());
        addressFormData.Address = $.trim(this.$modal.find('#address').val());
        addressFormData.City = $.trim(this.$modal.find('#city').val());
        addressFormData.State = this.$modal.find('#state').val();
        addressFormData.ZipCode = $.trim(this.$modal.find('#zipcode').val());
        if (!addressFormData.FirstName) {
            MessageBoxInit('First Name is required');
        } else if (!addressFormData.LastName) {
            MessageBoxInit('Last Name is required');
        } else if (!addressFormData.Phone) {
            MessageBoxInit('Phone is required');
        } else if (!addressFormData.Address) {
            MessageBoxInit('Address is required');
        } else if (!addressFormData.City) {
            MessageBoxInit('City is required');
        } else if (!addressFormData.State) {
            MessageBoxInit('State is required');
        } else if (!addressFormData.ZipCode) {
            MessageBoxInit('Zipcode is required');
        }
        // all form data pass the validation
        else {
            validateResult.isValidated = true;
            validateResult.result = addressFormData;
        }
        return validateResult;
    }
}
export {
    orderModal
}