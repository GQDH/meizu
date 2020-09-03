import $ from './library/jquery.js';

// 导入jQuery插件时无需指定名称 不需要调用
// 在改写时 需要在插件中引入jQuery作为模块
import './library/jquery-tabs.js';
import './library/jquery-md5.js'; // MD5插件，可以对字符串进行MD5算法加密
import './library/jquery.lazyload.js';


// import './ff.js';

// console.log($.md5('abc')); // MD5插件使用语法


$("img.lazy").lazyload({
    placeholder: "../images/timg.gif", //用图片提前占位
    // placeholder,值为某一图片路径.此图片用来占据将要加载的图片的位置,待图片加载时,占位图则会隐藏
    effect: "fadeIn", // 载入使用何种效果
    // effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
    // threshold: 200, // 提前开始加载
    // threshold,值为数字,代表页面高度.如设置为200,表示滚动条在离目标位置还有200的高度时就开始加载图片,可以做到不让用户察觉
    // event: 'click', // 事件触发时才加载
    // event,值有click(点击),mouseover(鼠标划过),sporty(运动的),foobar(…).可以实现鼠标莫过或点击图片才开始加载,后两个值未测试…
    // container: $("#container"), // 对某容器中的图片实现效果
    // container,值为某容器.lazyload默认在拉动浏览器滚动条时生效,这个参数可以让你在拉动某DIV的滚动条时依次加载其中的图片
    // failurelimit: 10 // 图片排序混乱时
    // failurelimit,值为数字.lazyload默认在找到第一张不在可见区域里的图片时则不再继续加载,但当HTML容器混乱的时候可能出现可见区域内图片并没加载出来的情况,failurelimit意在加载N张可见区域外的图片,以避免出现这个问题.
});




//渲染index

// import $ from './library/jquery.js'; //导入jquery
console.log($);

(function() { //调用 jQuery中的 ajax的方法  实现 

    $.ajax({
        type: "get",
        url: "../../interface/getproduct.php",
        dataType: "json", //获得到的数据类型是json 数据
        success: function(res) { //获取数据 成功  执行里面的代码   res 是获取数据后的结果
            // console.log(res);
            let temp = '';
            res.forEach((elm, i) => { //遍历  获得的数据
                let picture = JSON.parse(elm.picture); //将获得的 数据中的图片的json 数据 转化为 数组
                console.log(picture[0].src);
                //将在数据库里获得的 每个商品的id  图片路径  商品标题  商品价格加入到下列代码  中  然后插入页面
                temp += `<div class="mz-17">
                <a href="./product.html?id=${elm.id}">
                <img class="lazy" src="${picture[0].src}" alt="">
                <p>${elm.detail1}</p>
                <i>${elm.detail2}</i>
                <em>￥${elm.price}</em>
                </a> </div>`;
            });
            $('#add').append(temp); //将上面获得到的数据代码 插到类名为 list 的标签中
        }
    });
})();