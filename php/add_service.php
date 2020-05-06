<?php

require 'db.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$number = $request->number;
$name = $request->name;
$text = $request->text;
$img = $request->img;
$update = $request->update;
$id = $request->id;


if($update==1){
    $query = "update `services` set `Номер` ='".$number."',`Название` = '".$name."',`Описание` = '".$text."',`Картинка` = '".$img."' where id =".$id." ;";
}else{
    $query = "INSERT INTO `services` (`Номер`,`Название`,`Описание`,`Картинка`) VALUES ('".$number."', '".$name."', '".$text."', '".$img."');";
}

$res = mysqli_query($db, $query) or trigger_error(mysqli_error() . " in " . $query);

echo $res;