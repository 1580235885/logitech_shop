<?php

    // header('Access-Control-Allow-Origin: *');   
    // header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');  
    // header('Access-Control-Allow-Headers: x-requested-with, content-type');
    $price=$_REQUEST["price"];
    $id=$_REQUEST["id"];
    $img=$_REQUEST["img"];
    $title=$_REQUEST["title"];
    $con = new mysqli("localhost","root","root","logitech");
    $select="select * from shop_car ";
    $test=$con->query($select);
    while($arr=$test->fetch_assoc()) {
        $array[] = $arr;
    };
    $insert = "insert into shop_car (id,newprice,img,title) values ('$id','$price','$img','$title');"; 
    if($con->query($insert)===true) {
        // echo "加入成功";
        // header('shop_car.html');   
    }else {
        // echo "加入失败";
        // header('index.html'); 
    };

    // print_r($array);
    echo json_encode($array);
?>