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
   'email', 
   FILTER_SANITIZE_EMAIL
);


    $user_password = $_POST['password'];

    $check = "SELECT * FROM users_data WHERE user_email = '$user_email'";
    $result = mysqli_query($conn, $check);

    if(mysqli_num_rows($result) > 0){
        $row = mysqli_fetch_assoc($result);
        $user_name = $row['user_name'];
        $user_hashed_password = $row['user_password'];

        $data = ["success", $user_name];
       if(password_verify($user_password, $user_hashed_password)){
          $json_data = json_encode($data);
          echo $json_data;
       }else{
        echo"Invalid credentials";
       }
    }else{
        echo"User not found";
    }
?>