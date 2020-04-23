<?php
    header('Access-Control-Allow-Origin: *');   
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');  
    header('Access-Control-Allow-Headers: x-requested-with, content-type');
    $con = new mysqli("localhost","root","root","logitech");
    $select="select * from shop_car ";
    $test=$con->query($select);
    while($arr=$test->fetch_assoc()) {
        $array[] = $arr;
    };
    echo json_encode($array);
?>