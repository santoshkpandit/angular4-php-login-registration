<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password,'api');


$user = json_decode(file_get_contents('php://input'),true); 
if(isset($user['username'])){
	$sql = "INSERT INTO users (first_name, last_name, username,password)
VALUES ('".$user['firstName']."', '".$user['lastName']."', '".$user['username']."','".$user['password']."')";

		mysqli_query($conn, $sql);
		echo json_encode(array('response'=>'sucess'));die;
		

}

mysqli_close($conn);
?>