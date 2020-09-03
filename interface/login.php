<?php
    include('./conn.php');
   
     $username = $_REQUEST['username'];
     $password = $_REQUEST['password'];
    
    $sql = "select * from users where username = '$username' and password = '$password'";

    $exist = $mysqli->query($sql);

    // echo $exist;
    // var_dump($exist->fetch_assoc()->'id') ;
    $mysqli->close();


    if($exist->num_rows>0) {
        echo '{"isLogin":true,"msg":"登录成功","username":"'.$username.'"}';
    } else {
        echo '{"isLogin":false,"msg":"登录失败","username":"'.$username.'"}';
    }
?>