<?php

require 'db.php';

//$postdata = file_get_contents("php://input");
//$request = json_decode($postdata);
//$name = $request->name;
//$id_name = $request->id_name;
//$number = $request->number;

$name='admin';
$password='jhkFgh09m47VDgj12';
$hash='daFeTgVb4d6yg8CnDkleRi'.$password;

//$query = "INSERT INTO `users` (`Название`,`Пароль`) VALUES ('".$name."', '".sha1(sha1(sha1($hash)))."');";
//
//$res = mysqli_query($db, $query) or trigger_error(mysqli_error() . " in " . $query);
//
//
//
//echo $res;