<?php
header("content-Type:application/json;charset=utf-8");
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Credentals:true");
$con= new mysqli ('localhost','root','root','logitech');
$name=$_REQUEST['name'];
$phone=$_REQUEST['phone'];
$site1=$_REQUEST['site1'];
$site2=$_REQUEST['site2'];
if($con->connect_error) {
        die('连接失败');
    //    echo $con->connect_error;
   };
$sql="insert into user (telphone,address,username) values ('$phone','$site1$site2','$name') ;";
if($con->query($sql)===true){
    echo "成功";
    header('location:address.html');   
}else {
    echo "表失败";
    header('location:address-edit.html');
};
 ?>
