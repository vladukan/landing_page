<?php

require 'db.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$number = $request->number;
$text = $request->text;
$update = $request->update;
$id = $request->id;

if($update==1){
    $query = "update `benefit` set `Номер` = '".$number."', `Описание` = '".$text."' where id =".$id." ;";
}else{
    $query = "INSERT INTO `benefit` (`Номер`,`Описание`) VALUES ('".$number."', '".$text."');";
}

$res = mysqli_query($db, $query) or trigger_error(mysqli_error() . " in " . $query);

echo $res;