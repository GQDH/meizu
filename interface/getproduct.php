<?php
    include('./conn.php');//连接数据库

// 获取后端数据

    $sql = "select * from product";//在库名为product 的库里 选取数据

    

    $res = $mysqli->query($sql);//执行上 一行代码

    $mysqli->close();//关闭服务器

    $arr = array();//定义一个空数组

    while($row = $res->fetch_assoc()){//如果上面 获取的数据有的话   获得到的数据也是数组
        array_push($arr,$row);//则将获取的数据放入到空数组 arr 中
        // echo ($row);
    }

    $json = json_encode($arr);//将数组 转化为json数据类型

    echo $json;
    

?>