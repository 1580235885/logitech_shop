<?php
header("content-Type:application/json;charset=utf-8");
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Credentals:true");
$con= new mysqli ('localhost','root','root','logitech');
$pass=$_REQUEST['pass'];
$pass1=$_REQUEST['pass1'];
if($con->connect_error) {
        die('连接失败');
       echo $con->connect_error;
   };
$sql="update user set password='$pass1' where password='$pass';";
if($con->query($sql)===true){
    echo "成功";
    header('location:update-pass.html');
}else {
    echo "表失败";
    header('location:update-pass.html');
};
 ?>
