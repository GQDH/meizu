import $ from './library/jquery.js'; //导入jquery
console.log($);

(function() { //调用 jQuery中的 ajax的方法  实现 
    $.ajax({
        type: "get",
        url: "../../interface/getproduct.php",
        dataType: "json", //获得到的数据类型是json 数据
        success: function(res) { //获取数据 成功  执行里面的代码   res 是获取数据后的结果
            console.log(res);
            let temp = '';
            res.forEach((elm, i) => { //遍历  获得的数据
                let picture = JSON.parse(elm.picture); //将获得的 数据中的图片的json 数据 转化为 数组
                console.log(picture);
                //将在数据库里获得的 每个商品的id  图片路径  商品标题  商品价格加入到下列代码  中  然后插入页面
                temp += `<div class="mz-17">
                <img class="lazy" data-original="${picture[0].src}" alt="">
                <p>魅族 17 航母限定版</p>
                <i>以梦为舰 热爱起航</i>
                <em>￥4299</em>
            </div>`;
            });
            $('#add').append(temp); //将上面获得到的数据代码 插到类名为 list 的标签中
        }
    });
})();