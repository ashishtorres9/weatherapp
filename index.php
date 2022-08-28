<?php
header('Access-Control-Allow-Origin: *');
include 'db_connect.php';


    $key= "0569113fba97d5cc1a9cfbc16b881262";
    $baseurl= "https://api.openweathermap.org/data/2.5/";

    $api_url = $baseurl."weather?q=thurrock&units=metric&APPID=".$key;

    $json_res = file_get_contents($api_url);

    $res = json_decode($json_res);

    $city = $res->name;
    $country = $res->sys->country;
    $temperature = $res->main->temp;
    $weather_type = $res->weather[0]->main;
    $weather_type_desc = $res->weather[0]->description;
    $temp_min = $res->main->temp_min;
    $temp_max = $res->main->temp_max;
    $humidity = $res->main->humidity;
    $id = uniqid();

    $stmt = $conn->prepare("INSERT into weather(id,city,country,temperature,weather_type,weather_type_desc,temp_min,temp_max,humidity) values(?,?,?,?,?,?,?,?,?)");
    $stmt->bind_param('sssdssddd',$id,$city,$country,$temperature,$weather_type,$weather_type_desc,$temp_min,$temp_max,$humidity);

    $stmt->execute();

    if(!$stmt){
        "error".$stmt-error;
    }




?>