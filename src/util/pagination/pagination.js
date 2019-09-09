/*
 * @Author: Lucia 
 * @Date: 2019-08-23 10:08:12 
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-09-05 15:28:23
 */

import './pagination.css';
import {
    utility
} from 'util/util';
import {
    paginationTemplate
} from './paginationTemplate.js';

class Pagination {
    constructor() {
        let _this = this;
        this.defaultOptions = {
            pageRange: 3,
            clickEvent: null
        }
        $(document).on('click', '.page-item', function () {
            let $this = $(this);
            if ($this.hasClass('active') || $this.hasClass('disabled')) {
                return;
            }
            if (typeof _this.options.clickEvent === 'function') {
                _this.options.clickEvent($this.data('value'));
            }
        })
    }
    render(userOptions) {
        this.options = $.extend({}, this.defaultOptions, userOptions);
        // if didn't pass in container,pagination component can not be rendered
        if (!this.options.container || !(this.options.container instanceof jQuery)) return;
        // if pages value is <=1, pagination component doesn't need to be showed
        if (this.options.pages <= 1) return;
        this.options.container.html(this.getPaginationHtml());
    }
    getPaginationHtml() {
        let paginationData = [];
        let startPage = this.options.pageNumber - this.options.pageRange < 1 ? 1 : this.options.pageNumber - this.options.pageRange;
        let endPage = this.options.pageNumber + this.options.pageRange > this.options.pages ? this.options.pages : this.options.pageNumber + this.options.pageRange;
        // bind data to pagination array
        paginationData.push({
            name: '<',
            value: this.options.prePage,
            disabled: !this.options.hasPreviousPage
        })
        for (let i = startPage; i <= endPage; i++) {
            paginationData.push({
                name: i,
                value: i,
                active: (i === this.options.pageNumber)
            })
        }
        paginationData.push({
            name: '>',
            value: this.options.nextPage,
            disabled: !this.options.hasNextPage
        })
        let paginationHtml = utility.renderHtml(paginationTemplate, {
            paginationData: paginationData,
            pageNumber: this.options.pageNumber,
            pages: this.options.pages
        });
        return paginationHtml;
    }

}
export {
    Pagination
}