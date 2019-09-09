const shoppingcartTemplate = `{{#notEmpty}}<div class="cart-detail table-responsive-md">
{{#cartProductVoList}}
<table class="table table-hover" data-productid="{{productId}}">
    <thead>
        <tr>
            <th>IMAGE</td>
            <th>DESCRIPTION</td>
            <th>QUANTITY</td>
            <th>UNIT PRICE</td>
            <th>TOTAL</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <a href="./productdetail.html?productId={{productId}}">
                <img src="{{imageHost}}{{productMainImage}}" alt="{{productName}}" />
            </a>
            <a href="./productdetail.html?productId={{productId}}">
                {{productName}}
            </a>
            <td class="d-flex align-items-center">
                <input type="text" size="3" value="{{quantity}}" class="amount" data-max="{{productStock}}">
                <div class="d-flex flex-column action-icon">
                    <span class="px-1"><i class="fas fa-plus action plus"></i></span>
                    <span class="px-1"><i class="fas fa-minus action minus"></i></span>
                </div>
                <div class="delete">
                    <span><i class="fas fa-times"></i></span>
                </div>
            </td>
            <td>$ {{productPrice}}</td>
            <td>$ {{productTotalPrice}}</td>
        </tr>
    </tbody>
</table>
{{/cartProductVoList}}
<footer class="summary d-flex align-items-center">
    <button class="btn mr-auto">
        <i class="fas fa-angle-double-left"></i>
        GO HOME</button>
    <span class="mr-2">TOTAL: <span class="total">$ {{cartTotalPrice}}</span></span>
    <button class="btn checkout">
        <i class="fas fa-angle-double-right"></i>
        CHECK OUT</button>
</footer>
</div>
{{/notEmpty}}
{{^notEmpty}}
<div class="error-message"><span>Shopping cart is empty</span> 
<a href="./index.html">Go Home</a>
{{/notEmpty}}`;
export {
    shoppingcartTemplate
}