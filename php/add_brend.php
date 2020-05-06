<?php

require 'db.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$name = $request->name;
$img = $request->img;
$update = $request->update;
$id = $request->id;

if($update==1){
    $query = "update `brends` set `Название` = '".$name."', `Картинка` = '".$img."' where id =".$id." ;";
}else{
    $query = "INSERT INTO `brends` (`Название`,`Картинка`) VALUES ('".$name."', '".$img."');";
}

$res = mysqli_query($db, $query) or trigger_error(mysqli_error() . " in " . $query);

echo $res;