<?php
    //Do not Touch, It works!
    //Do not Touch, It works!
    //Do not Touch, It works!
    //Do not Touch, It works!
    //Do not Touch, It works!

     header("Access-Control-Allow-Origin: http://localhost:5173");
     header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); 
     header("Access-Control-Allow-Headers: Content-Type, Authorization");
     header("Content-Type: application/json");

     //database conn

     $host = "localhost";
     $user = "root";
     $password = "";
     $dbname = "luxedrive";

     $conn = mysqli_connect($host, $user, $password, $dbname);
     $current_date_time = date('y-m-d h-i-s');

    $user_name = filter_input(
        INPUT_POST, 
        'user_name', 
        FILTER_SANITIZE_SPECIAL_CHARS
    );
    
    $user_email = filter_input(
        INPUT_POST, 
        'user_email', 
        FILTER_SANITIZE_EMAIL
    );

    $user_password = $_POST['user_password'];
    $hash_password = password_hash($user_password, PASSWORD_DEFAULT);
 
    //Getting the highest id number

    $check = "SELECT MAX(user_id) AS highest_id FROM users_data";
    $result = mysqli_query($conn, $check);

    if(mysqli_num_rows($result) > 0){
        $row = mysqli_fetch_assoc($result);
        $highest_id = $row['highest_id'];
    }

    $next_id = $highest_id + 1;
    $input_id = "00$next_id";
    echo $input_id;

    //Add verified sign ups to the database

    $add = "INSERT INTO users_data(
        user_id,
        user_name,
        user_email, 
        user_password,
        created_at
    ) 
    VALUES(
        '$input_id',
        '$user_name',
        '$user_email',
        '$hash_password',
        '$current_date_time'
    )";

    $sign_up = mysqli_query($conn, $add);
    if($sign_up){
        echo"Success";
    }else{
        echo"An error occured";
    }

    mysqli_close($conn)
?>