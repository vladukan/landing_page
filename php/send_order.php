<?php

require 'db.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$name = $request->name;
$phone = $request->phone;
$date= date("Y-m-d H:i:s");

$query = "INSERT INTO `orders` (`Дата`,`Имя`,`Телефон`) VALUES ('".$date."','".$name."', '".$phone."');";

$res = mysqli_query($db, $query) or trigger_error(mysqli_error() . " in " . $query);

echo $res;

$headers  = "Content-type: text/html; charset=utf-8 \r\n";

mail("vladukan@gmail.com", "У вас заказ на ремонт", "Имя клиента:".$name.'<br>Телефон '.$phone,$headers);