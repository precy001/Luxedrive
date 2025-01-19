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

   $user_email = filter_input(
   INPUT_POST, 
   'user_email', 
   FILTER_SANITIZE_EMAIL
);
    $user_password = $_POST['user_password'];

    $check = "SELECT * FROM users_data WHERE user_email = '$user_email'";
    $result = mysqli_query($conn, $check);

    if(mysqli_num_rows($result) > 0){
        $row = mysqli_fetch_assoc($result);
        $user_name = $row['user_name'];
        $user_hashed_password = $row['user_password'];
       if(password_verify($user_password, $user_hashed_password)){
            echo"success";
            echo"$user_name";
       }else{
        echo"Invalid credentials";
       }
    }else{
        echo"User not found";
    }
?>