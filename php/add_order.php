<?php

require 'db.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$name = $request->name;
$phone = $request->phone;
$status = $request->status;
$update = $request->update;
$id = $request->id;
$today = date("Y-m-d H:i:s");
if($update==1){
    $query = "update `orders` set `Имя` = '".$name."', `Телефон` = '".$phone."', `Статус` = '".$status."' where id =".$id." ;";
}else{
    $query = "INSERT INTO `orders` (`Дата`,`Имя`,`Телефон`,`Статус`) VALUES ('".$today."','".$name."','".$phone."', '".$status."');";
}

$res = mysqli_query($db, $query) or trigger_error(mysqli_error() . " in " . $query);

echo $res;