<?php
	header('Access-Control-Allow-Origin: *');   
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS'); 
    header('Access-Control-Allow-Headers: x-requested-with, content-type');  
                            
	$serve = "localhost";
    $name = "root";
    $password = "root";
    $mysql = "logitech";
    
    $con = new mysqli($serve, $name, $password, $mysql);

    $phone = $_POST["phone"];
    $pass = $_POST["password"];
    
    $sql = "select * from user where telphone=$phone ;";
	$test = $con->query($sql);
	if ($test) {
		 while($arr=$test->fetch_assoc()) {
			 if($pass==$arr["password"]){
				echo "<script>localStorage.setItem('userStatus',$phone);window.location='mine.html';</script>";
			} else {
				echo "<script>localStorage.setItem('loginStatus','loginError'); window.location='login.html';</script>";
			}
		 }   
	}
    $con->close();;
?>