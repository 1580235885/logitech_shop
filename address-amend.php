<?php
header("content-Type:application/json;charset=utf-8");
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Credentals:true");
$con= new mysqli ('localhost','root','root','logitech');
$name=$_REQUEST['name'];
if($con->connect_error) {
        die('连接失败');
       echo $con->connect_error;
   };
$sql="delete from user where username='$name';";
if($con->query($sql)===true){
    echo "成功";
    header('location:address.html');   
}else {
    echo "表失败";
    header('location:address-amend.html');   
};
 ?>