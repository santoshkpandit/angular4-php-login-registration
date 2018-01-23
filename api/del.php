<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password,'api');


if(isset($_GET['id'])){


$sql = "DELETE FROM users where id='".$_GET['id']."'";
$result = mysqli_query($conn,$sql); 

echo json_encode(array('response'=>'200'));

}

mysqli_close($conn);
?>