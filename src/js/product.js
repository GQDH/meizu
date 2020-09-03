//商品详情

import $ from './library/jquery.js';
import { cookie } from './library/cookie.js';
import tabs from './library/jquery-tabs.js'


// console.log(tabs);
(function() {

})();

// console.log(1);
(function() {
    let id = location.search.split('=')[1]; // 获取id    获取数据库中每个商品的id


    $.ajax({
        type: "get",
        url: "../../interface/getitem.php",
        data: {
            // 发送到服务器的数据。将自动转换为请求字符串格式。GET 请求中将附加在 URL 后。查看 processData 选项说明以禁止此自动转换。必须为 Key/Value 格式。如果为数组，jQuery 将自动为不同值对应同一个名称。如 {foo:["bar1", "bar2"]} 转换为 "&foo=bar1&foo=bar2"。
            id: id
        },
        dataType: "json",
        success: function(res) { //成功在数据库里获取的数据
            let picture = JSON.parse(res.picture);
            let template = `
            <main>
        <div class="detail">
            <div class="wrapper">
                <p>${res.title}</p>
                <div class="box">
                    <a href="#">
                        <i>概述</i>
                        <i>${res.title}</i>
                        <i>参数</i>
                        <i>换机指引</i>
                    </a>
                </div>
            </div>
        </div>

        <div class="wrapper inner">
            <div class="phone-left" id="btn">
                <!-- 放大图片 -->

                <div class="preview-box  show" >
                        <img src="${picture[1].src}" alt="">
                </div>
                <div class="preview-box">
                        <img src="${picture[2].src}" alt="">
                </div>
                <div class="preview-box">
                        <img src="${picture[3].src}" alt="">
                </div>
                <div class="preview-box">
                        <img src="${picture[4].src}" alt="">
                </div>
               
                <!-- 放大镜盒子 -->
                <div class="glass">

                </div>
                <!-- 放小图片 -->
                <ul class="s-box">
                    <li>
                        
                            <img src="${picture[5].src}" alt="">
                        
                    </li>
                    <li>
                       
                            <img src="${picture[6].src}" alt="">
                       
                    </li>
                    <li>
                        
                            <img src="${picture[7].src}" alt="">
                        
                    </li>
                    <li>
                       
                            <img src="${picture[8].src}" alt="">
                       
                    </li>
                </ul>

                <!-- 小图标 -->
                <div class="smalli">
                    <a href="#">
                        <span class="iconfont icon-sel-collect"></span>
                        <i>收藏</i>
                    </a>
                    <a href="#">
                        <span class="iconfont icon-duibi"></span>
                        <i>对比</i>
                    </a>
                </div>

            </div>


            <div class="phone-right">
                <h1>${res.title}</h1>
                <p class="ke">【限时领劵立省200 | 购魅族17增全新壳膜套餐 | 学生购机享精美礼品】 高通骁龙 865 | UFS 3.1 高速闪存 | 6400W 全场景影像系统 | 重量平衡设计 | mSmart 5G 快省稳系统方案 | 30W有线快充</p>
                <!-- 销售价3699.00 -->
                <div class="sell">
                    <div class="discounts">
                        <p><span>￥</span>${res.price}</p>
                        <em><i>优惠卷</i>满2699减100&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;满3699减200 <span >更多 ></span></em>
                        <em class="shop"><i>加价购</i>另加29元起，即可换购超值商品 <span>立即加购 ></span></em>
                    </div>

                </div>
                <!-- 支持 -->
                <ul class="support">
                    <li class="good">
                        <span>支&nbsp;&nbsp;&nbsp;&nbsp;持</span>
                        <span class="iconfont icon-success"></span>
                        <span>花呗分期</span>
                        <span class="iconfont icon-success"></span>
                        <span>顺丰发货</span>
                        <span class="iconfont icon-success"></span>
                        <span>7天无理由退货（具体查看详情）</span>
                    </li>
                    <li class="address">
                        <i>配送服务</i>
                        <span class="ad"> 浙江省 杭州市 <span class="iconfont icon-lower-triangle"></span></span>

                    </li>
                    <li class="kefu">
                        <i>本商品由 魅族 负责发货并提供售后服务</i>
                        <span class="iconfont icon-kefu"></span>
                        <em>商城客服</em>
                    </li>

                </ul>

                <!-- 型号 -->
                <div class="type">
                    <div class="jihao">型&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</div>
                    <div class="shouji">
                        <a>${res.title}</a>
                        <a>${res.title} Pro</a>
                        <a>【开学套餐】 ${res.title}</a>
                        <a>【开学套餐】 17 Pro</a>
                    </div>
                </div>
                <!-- 网络类型 -->
                <div class="wifi">
                    <div class="net">网络类型</div>
                    <p>全网通公开版</p>
                </div>

                <!-- 颜色 -->
                <div class="color">
                    <div class="color-t">颜色分类</div>
                    <div class="pt">
                        <a>
                            <img src="../images/p1.png" alt="">
                            <span> 松深入墨</span>
                        </a>
                        <a>
                            <img src="../images/p2.png" alt="">
                            <span> 十七度灰</span>
                        </a>

                        <a>
                            <img src="../images/p3.png" alt="">
                            <span>AG梦幻独角兽</span>
                        </a>

                        <a>
                            <img src="../images/p4.png" alt="">
                            <span>AG星际灰</span>
                        </a>
                        <a>
                            <img src="../images/p5.png" alt="">
                            <span> AG原野绿</span>
                        </a>
                    </div>

                </div>
                <!-- 内存容量 -->
                <div class="content">
                    <div class="save">内存容量</div>
                    <div class="G">
                        <a href="#">8+128G</a>
                        <a href="#">8+256G</a>
                    </div>
                </div>

                <!-- 选择套餐 -->
                <div class="combo">
                    <div class="select">颜色分类</div>
                    <div class="offical">
                        <em href="#">
                    官方标配
                        </em>
                        <a href="#">
                            <span>EP3C套餐</span>
                            <i>省<p>30</p>元</i>
                        </a>
                        <a href="#">
                            <span>碎屏保套餐</span>
                            <i>省<p>50</p>元</i>
                        </a>
                        <a href="#">
                            <span>充电套餐</span>
                            <i>省<p>20</p>元</i>
                        </a>

                    </div>


                </div>



                <!-- 选择套餐 -->
                <div class="stage">
                    <div class="ant">
                        <p class="huabei">花呗分期</p>
                        <span class="iconfont icon-wenhao"></span>
                    </div>
                    <div class="day">
                        <span>￥1261.36×3期 </span>
                        <span>含手续费 ￥28.36/期</span>
                    </div>
                    <div class="day">
                        <span>￥644.24×6期 </span>
                        <span>含手续费 ￥27.74/期</span>
                    </div>
                    <div class="day">
                        <span>￥331.36×12期 </span>
                        <span>含手续费 ￥23.11/期</span>
                    </div>
                </div>

                <!-- 数量 -->
                <div class="number">
                    <div class="n1">
                        数<span></span>
                        <span></span>量
                    </div>
                    <div class="sl">
                        <a href="#">-</a>
                        <input type="number" value="1" min="1" max="${res.num}" id="num" class="num">
                        <a href="#">+</a>
                    </div>
                </div>
                <!-- 立即购买 -->
                <div class="instantshop">
                    <div class="shop-atlast">立即购买</div>
                    <a href="./shopcar.html"><input type="button" value="加入购物车" id="additem" class="shopcat"></a>
                </div>


            </div>
        </div>


    </main>



    <!-- 商品详情 -->
    <div class="product-detail">
        <div class="detail-wrapper">
            <h2>商品详情</h2>
            <div class="p">
                <img src="../images/asyou.jpg" alt="" class="i1">
                <a href="script:">
                    <img src="../images/love.jpg" alt="">
                </a>
                <a href="script:">
                    <img src="../images/stu.jpg" alt="">
                </a>
            </div>
            <div class="p2">
                <img src="../images/youhui.jpg" alt="">
            </div>
            <div class="p3">
                <img src="../images/ep3c.jpg" alt="">
            </div>
        </div>
    </div>
            `;

            $('body').append(template).find('#additem').on('click', function() { //将上面的代码  加到body中
                addItem(res.id, res.price, $('#num').val());
                // console.log('添加商品');
            });

            $('#btn').tabs({
                ev: 'click',
                // btn: 'a1',
                content: 'show'
            });


            $('#btn').tabs();
        }
    });



    function addItem(id, price, num) {
        let shop = cookie.get('shop'); // 从cookie中获取shop数据

        let product = {
            id: id,
            price: price,
            num: num
        };

        if (shop) { // 判断是否存有购物车数据
            shop = JSON.parse(shop);
            // 购物车中是否已经存在当前这件商品
            if (shop.some(elm => elm.id == id)) { //
                // 修改数量
                shop.forEach(elm => {
                    elm.id === id ? elm.num = num : null;
                });
            } else {
                // 添加商品
                shop.push(product);
            }

        } else {
            shop = [];
            shop.push(product);
        }

        cookie.set('shop', JSON.stringify(shop), 1);
    }



})();




//