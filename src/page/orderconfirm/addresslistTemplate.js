let addresslistTemplate = `<header class="py-2"> Shipping Address </header>
<div class="address-detail mt-3">
{{#list}}
    <div class="p-2 address-list" data-addressid="{{id}}">
        <div class="name">{{receiverName}}</div>
        <div class="address">{{receiverAddress}}</div>
        <div class="phone">{{receiverPhone}}</div>
        <div class="city-state">{{receiverCity}},{{receiverProvince}}</div>
        <div class="zipcode">{{receiverZipcode}}</div>
        <div class="text-right">
            <span><i class="far fa-edit"></i></span>
            <span><i class="far fa-minus-square"></i></span>
        </div>
    </div>
{{/list}}
    <div class="text-center">
        <span class="add-icon"><i class="fas fa-plus"></i></span>
        <div>Add new shipping address</div>
    </div>
</div>`;
export {
    addresslistTemplate
}