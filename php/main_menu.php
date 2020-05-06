<?php

require 'db.php';

$query='select * from main_menu ORDER by ID';

$res = mysqli_query($db, $query) or trigger_error(mysqli_error() . " in " . $query);

while ($array=mysqli_fetch_row($res)) {
    $arr[]=$array;

}

header('Content-Type: text/json');

echo json_encode($arr);

