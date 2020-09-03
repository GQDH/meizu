<?php
    include('./conn.php');//将连接数据库  的代码引入

    $id = $_REQUEST['id'];//获得数据库 中商品的 id
    
    
    $sql = "select * from product where id='$id'";
   
    $res = $mysqli->query($sql);//请求连接数据库
  
    

    
    $mysqli->close();//关闭数据库

    $row = $res->fetch_assoc();//获得数据库里的一条数据
   

    $json = json_encode($row);//将数组转化为 json数据类型
    
    echo $json;
    // echo 1;
    // die();
?>