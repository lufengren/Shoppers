let productTemplate = `<div class="list">{{#lists}}<div class="item d-flex flex-column">
<a href = "./productdetail.html?productid={{id}}" class="text-center">
<img src="../../image/list-300.jpg" alt="{{name}}">
<span><i class="fas fa-shopping-bag"></i></span >
</a> <div class="description">
<span>{{name}} </span>
</div>
<div class="price">
$ {{price}}
</div>
</div >
{{/lists}}
{{^lists}}
<p class="error-message">Sorry,we don't have this product<p>
{{/lists}}
</div>`;

export {
    productTemplate
}