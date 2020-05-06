<?php

require 'db.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$name = $request->name;
$phone = $request->phone;
$img = $request->img;
$content = $request->content;
$result = $request->result;
$update = $request->update;
$id = $request->id;

$date=date("Y-m-d H:i:s");
if($img==''){
    $img='../ckfinder/userfiles/no_foto.png';
}
if($update==1){
    $query = "update `comments` set `Имя` ='".$name."',`Телефон` = '".$phone."',`Фото` = '".$img."',`Отзыв` = '".$content."',`Результат` = '".$result."' where id =".$id." ;";
}else{
    $query = "INSERT INTO `comments` (`Дата`,`Имя`,`Телефон`,`Фото`, `Отзыв`,`Результат`) VALUES ('".$date."', '".$name."', '".$phone."', '".$img."', '".$content."', '".$result."');";
}

$res = mysqli_query($db, $query) or trigger_error(mysqli_error() . " in " . $query);

echo $res;