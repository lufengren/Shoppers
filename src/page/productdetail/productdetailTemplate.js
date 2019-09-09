let productdetailTemplate = `<div class="product-general-info d-flex">
<div class="imgs d-flex flex-column">
    <div class="main-img">
            <img src="{{imageHost}}{{mainImage}}" alt="{{name}}">
    </div>
    <div class="thumbnail">
        <ul class="d-flex justify-content-between">
        {{#subImages}}
            <li><img src="{{imageHost}}{{.}}"
            alt="{{name}}"></li>
        {{/subImages}}
        </ul>
    </div>
</div>
<div class="info pl-4">
    <ul>
        <li>{{name}}</li>
        <li>{{subtitle}}</li>
        <li>$ {{price}}</li>
        <li>stock: <span>{{stock}}</span></li>
        <li class="d-flex">
            <input type="text" size="3" value="1" class="amount">
            <div class="d-flex flex-column action-icon">
                <span class="px-1"><i class="fas fa-plus action plus"></i></span>
                <span class="px-1"><i class="fas fa-minus action minus"></i></span>
            </div>
        </li>
        <li class="pt-2">
            <button class="btn add-cart-btn">ADD TO CART</button>
        </li>
    </ul>
</div>
</div>
<div class="product-detail-info d-flex flex-column align-items-center">
{{{detail}}}
</div>`;
export {
    productdetailTemplate
}