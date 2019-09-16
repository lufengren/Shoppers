let productlistTemplate = `<header class="py-2"> Product Lists </header>
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
    {{#orderItemVoList}}
        <tr>
            <td>
                <a href="./productdetail.html?productId={{productId}}" target="_blank">
                    <img src="{{imageHost}}{{productMainImage}}" alt="{{productName}}" />
                </a>
            </td>
            <td>
                <a href="./productdetail.html?productId={{productId}}" target="_blank">
                    {{productName}}
                </a>
            </td>
            <td>
                {{quantity}}
            </td>
            <td>$ {{currentUnitPrice}}</td>
            <td>$ {{totalPrice}}</td>
        </tr>
    {{/orderItemVoList}}
    </tbody>
</table>
<footer class="summary d-flex align-items-center">
    <span class="mr-2">TOTAL: <span class="total">$ {{productTotalPrice}}</span></span>
    <button class="btn checkout">
        SUBMIT ORDER</button>
</footer>`;
export {
    productlistTemplate
}