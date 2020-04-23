<?php 

    header("content-Type:application/json;charset=utf-8");
    header("Access-Control-Allow-Origin:*");
    header("Access-Control-Allow-Credentials:true");

    $con = new mysqli('localhost', 'root', 'root', 'logitech');

    $user= $_REQUEST['user'];
    // 判断是否链接成功
    if($con->connect_error) {
        die('连接失败');
    };
    // echo '连接成功';

    $select = "select * from user where telphone={$user};";

    $select = $con->query($select);
    
    while($product=$select->fetch_assoc()) {
        $arr[] = $product;
    }
    echo json_encode($arr);
    
?>