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
    $query = "update `why_we` set `Номер` ='".$number."',`Картинка` = '".$img."',`Заголовок` = '".$name."',`Описание` = '".$text."' where id =".$id." ;";
}else{
    $query = "INSERT INTO `why_we` (`Номер`,`Картинка`,`Заголовок`,`Описание`) VALUES ('".$number."', '".$img."', '".$name."', '".$text."');";
}

$res = mysqli_query($db, $query) or trigger_error(mysqli_error() . " in " . $query);

echo $res;