<?php

require 'db.php';

$query='select * from main_menu ORDER by `Номер`';

$res = mysqli_query($db, $query) or trigger_error(mysqli_error() . " in " . $query);

while ($array=mysqli_fetch_row($res)) {
    $arr['menu'][]=$array;
}




$query = 'SELECT * FROM `headers` ORDER BY `ID`';

$res = mysqli_query($db, $query) or trigger_error(mysqli_error() . " in " . $query);

while ($array=mysqli_fetch_row($res)) {
    $arr['headers'][]=$array;
}

$query = 'SELECT * FROM `text_headers` ORDER BY `ID`';

$res = mysqli_query($db, $query) or trigger_error(mysqli_error() . " in " . $query);

while ($array=mysqli_fetch_row($res)) {
    $out[]=$array;
}

for($i=0;$i<count($arr['headers']);$i++){
    for($j=0;$j<count($out);$j++){
        if($out[$j][1]==$arr['headers'][$i][0]){
            $arr['text_headers'][$i][]=$out[$j];
        }
    }
}



header('Content-Type: text/json');

echo json_encode($arr);