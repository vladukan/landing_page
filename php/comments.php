<?php

require 'db.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$id = $request->id;


$query='select COUNT(1) from comments';

$res = mysqli_query($db, $query) or trigger_error(mysqli_error() . " in " . $query);

while ($arr=mysqli_fetch_assoc($res)) {
    $lim=$arr['COUNT(1)'];
    $out['limit']=$arr['COUNT(1)'];
}
if($id>=$lim){
    echo '0';
}else{
    $query='select * from comments order by `Дата` desc limit 3 offset '.$id;

    $res = mysqli_query($db, $query) or trigger_error(mysqli_error() . " in " . $query);

    while ($arr=mysqli_fetch_row($res)) {
        $out['comments'][]=$arr;
    }
    header('Content-Type: text/json');
    echo json_encode($out);
}



