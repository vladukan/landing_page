<?php

if( isset( $_POST['my_file_upload'] ) ){


    $error=0;
    $blacklist = array(".php", ".phtml", ".php3", ".php4", ".html", ".htm",".js");
    foreach ($blacklist as $item) {
        if(preg_match("/$item\$/i", $_FILES[0]['name'])) {
            $error=1;
            $text='Не верный тип файла';
        }
        $type = $_FILES[0]['type'];
        $size = $_FILES[0]['size'];
        if (($type != "image/jpg") && ($type != "image/jpeg") && ($type != "image/png") && ($type != "image/gif")) {
            $error=1;
            $text='Не верный тип картинки';
        }
        if ($size > 2002400) {
            $error=1;
            $text='Слишком большой файл';
        }
    }



if($error==0){
    $files      = $_FILES; // полученные файлы
    $uploaddir = '../ckfinder/userfiles/images/comments'; // . - текущая папка где находится submit.php

    // cоздадим папку если её нет
    if( ! is_dir( $uploaddir ) ) mkdir( $uploaddir, 0777 );


    $done_files = array();

    // переместим файлы из временной директории в указанную
    foreach( $files as $file ){
        $file_name = $file['name'];

        if( move_uploaded_file( $file['tmp_name'], "$uploaddir/$file_name" ) ){
            $done_files[] = realpath( "$uploaddir/$file_name" );
        }
    }
}else{
    $done_files = array();
}
    // ВАЖНО! тут должны быть все проверки безопасности передавемых файлов и вывести ошибки если нужно


    $data = $done_files ? array('files' => $done_files ) : array('error' => $text);

    echo json_encode( $data );
}