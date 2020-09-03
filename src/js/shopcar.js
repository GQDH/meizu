import $ from './library/jquery.js';
import { cookie } from './library/cookie.js';


import { all } from './car.s.js'
// console.log(1);
(function() {
    let shop = cookie.get('shop');

    if (shop) {
        shop = JSON.parse(shop); //  有cookie数据 才转JSON

        let idList = shop.map(elm => elm.id).join(); // 获取所有id

        $.ajax({
            type: "get",
            url: "../../interface/getitems.php",
            data: {
                idList: idList
            },
            dataType: "json",
            success: function(res) {
                console.log(res);
                var template = '';
                res.forEach((elm, i) => {
                    let picture = JSON.parse(elm.picture);

                    // 让ajax获得的数据结果的id 与 cookie中id  一一对应
                    // 索引值不同

                    // 从cookie中去筛选数据
                    let arr = shop.filter(val => val.id == elm.id);

                    template += `
                    <div class="mz-17">
                    <div class="box3">
                        <div class="pane" id="addp">
                        <input type="checkbox" >
                        </div>
                        <a href="#" class="i">
                            <img src="${picture[0].src}" alt="">
                        </a>
                        <a href="#" class="quan">
                            <p class="p1">${elm.title}</p>
                            <p class="p2">全网通公开版 AG梦幻独角兽 8+128GB</p>
                        </a>
                    </div>
        
                    <div class="money">
                        <p>
                            <span>￥${elm.price}</span>
                        </p>
                    </div>
        
                    <div class="number">
                        <span class="del">-</span>
                        <input type="number" value="${arr[0].num}" min="1" max="${elm.num}">
                        <span>+</span>
                    </div>
        
                    <div class="whole">
                        <span>￥${(elm.price*arr[0].num).toFixed(2)}</span>
                    </div>
                    <div class="gang">
                        <span>--</span>
                    </div>
                </div>`;

                });

                $('.product').append(template);



            }
        });

    }


})();