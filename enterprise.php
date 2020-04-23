<?php
$sendTxt=$_GET['sendTxt'];
// echo $sendTxt;
$con = new mysqli("localhost","root","root","logitech");
$sql="select * from logitech_shop where labels like '%{$sendTxt}%';";
$result=$con->query($sql);
while($arr=$result->fetch_assoc()) {
    $array[] = $arr;
};
// print_r($array);
echo json_encode($array);
?>