<?php

require 'db.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$name = $request->name;
$number = $request->number;
$file = $request->file;
$text = $request->text;
$res = $request->res;

if($file==''){
    $file='../ckfinder/userfiles/no_foto.png';
}else{
    $file='../ckfinder/userfiles/images/comments/'.$file;
}

$date= date("Y-m-d H:i:s");

$query = "INSERT INTO `comments` (`Дата`,`Имя`,`Телефон`,`Фото`,`Отзыв`,`Результат`) VALUES ('".$date."','".$name."', '".$number."', '".$file."', '".$text."', '".$res."');";

$res = mysqli_query($db, $query) or trigger_error(mysqli_error() . " in " . $query);

echo $res;
