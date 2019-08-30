let paginationTemplate = `<div class="container text-center mt-4">
{{#paginationData}}
{{#disabled}}
<span class="page-item disabled" data-value="{{value}}" disabled>
{{name}}
</span>
{{/disabled}}
{{^disabled}}
{{#active}}
<span class="active page-item" data-value="{{value}}">
{{name}}
</span>
{{/active}}
{{^active}}
<span class="page-item" data-value="{{value}}">
{{name}}
</span>
{{/active}}
{{/disabled}}
{{/paginationData}}
<span class="ml-3">
{{pageNumber}} / {{pages}}
</span>
</div>`;
export {
    paginationTemplate
}