<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include 'db_connect.php';

$sql = "SELECT * FROM `weather` ORDER BY datetime DESC limit 1;";
$result = mysqli_query($conn,$sql);
//$stmt->store_result();

$res_array = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $res_array[] = $row;
    }

 echo json_encode($res_array); 