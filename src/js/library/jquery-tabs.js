import $ from './jquery.js'; // 导入jQuery

let tabs = $.fn.extend({
    tabs: function(options) {
        let defaults = {
            ev: 'click',
            // btn: 'active',
            content: 'show'
        }

        $.extend(defaults, options); //合并对象

        let btns = this.children('.s-box').children('li');
        // console.log(btns);

        let divs = this.children('.preview-box');
        // console.log(divs);

        btns.on(defaults.ev, function() {
            let index = btns.index(this);
            console.log(index);
            // $(this).addClass(defaults.btn).siblings().removeClass(defaults.btn);
            divs.eq(index).addClass(defaults.content).siblings().removeClass(defaults.content);
        });
    }
});

export default tabs;