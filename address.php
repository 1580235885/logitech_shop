<?php
header("content-Type:application/json;charset=utf-8");
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Credentals:true");
$con= new mysqli ('localhost','root','root','logitech');
if($con->connect_error) {
        die('连接失败');
       echo $con->connect_error;
   };
$select = "select *from user;";
$result = $con->query($select);
while($article=$result->fetch_assoc()) {
    $data[] = $article;
};
echo json_encode($data); 
 ?>