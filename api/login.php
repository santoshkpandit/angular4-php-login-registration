<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password,'api');


$user = json_decode(file_get_contents('php://input'),true); 
if(isset($user['username']) && isset($user['password'])){


$sql = "SELECT * FROM users where username='".$user['username']."' AND password='".$user['password']."'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_array($result,MYSQLI_ASSOC);

if(!empty($row)){
echo json_encode(array('status'=>'200','data'=>$row));
}
else{
	echo json_encode(array('status'=>'300'));
}

}

mysqli_close($conn);
?>