<?php
    include("dbConnect.php");

    $name= $_POST['name'];
    $phone = $_POST['phone'];
    $mail = $_POST['mail'];
    $originSize_left = $_POST['originSize_left'];
    $originSize_right = $_POST['originSize_right'];
    $measure_size_left = $_POST['measure_size_left'];
    $measure_size_right = $_POST['measure_size_right'];
    $football_left = $_POST['football_left'];
    $football_right = $_POST['football_right'];


     $sql = "INSERT INTO bk_shoe_perfo (_name, _phone, _mail, _origin_size_left, _origin_size_right,  _measure_size_left, _measure_size_right, _football_left, _football_right) VALUES ('$name','$phone', '$mail', '$originSize_left','$originSize_right', '$measure_size_left', '$measure_size_right', '$football_left', '$football_right');";

        if(mysqli_query($link,$sql) or die(mysqli_error($link).$sql)){
            mysqli_close($link);
            echo "1";
        } else{
            mysqli_error($sql);
            echo "2";
        }

?>