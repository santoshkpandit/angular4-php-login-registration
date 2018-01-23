<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password,'api');


$user = json_decode(file_get_contents('php://input'),true); 


$sql = "SELECT * FROM users";
$result = mysqli_query($conn,$sql);
$userArr=array();
 while($row = mysqli_fetch_array($result,MYSQLI_ASSOC))
 	{
 		$userArr[]=$row;
 	};

echo json_encode($userArr);
die;

mysqli_close($conn);
?>