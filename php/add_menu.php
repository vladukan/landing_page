<?php

require 'db.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$number = $request->number;
$name = $request->name;
$link = $request->link;
$text = $request->text;
$content = $request->content;
$phone = $request->phone;
$fon = $request->fon;
$update = $request->update;
$id = $request->id;

if($update==1){
    $query = "update `main_menu` set `Номер` =".$number.",`Название` = '".$name."',`Ссылка` = '".$link."',`Заголовок` = '".$text."',`Описание` = '".$content."',`Телефон` = '".$phone."',`Фон` = '".$fon."' where id =".$id." ;";
}else{
    $query = "INSERT INTO `main_menu` (`Номер`,`Название`,`Ссылка`,`Заголовок`,`Описание`,`Телефон`,`Фон`) VALUES ('".$number."', '".$name."', '".$link."', '".$text."', '".$content."', '".$phone."', '".$fon."');";
}

$res = mysqli_query($db, $query) or trigger_error(mysqli_error() . " in " . $query);

echo $res;