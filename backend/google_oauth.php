<?php 
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

     $user_name = filter_input(
        INPUT_POST, 
        'name', 
        FILTER_SANITIZE_SPECIAL_CHARS
     );


     $check = "SELECT * FROM users_data WHERE user_email = '$user_email'";
     $result = mysqli_query($conn, $check);

     if(mysqli_num_rows($result) > 0){
            echo"success";
     }else{

        $check = "SELECT MAX(user_id) AS highest_id FROM users_data";
        $result1 = mysqli_query($conn, $check);
    
        if(mysqli_num_rows($result1) > 0){
            $row = mysqli_fetch_assoc($result1);
            $highest_id = $row['highest_id'];
        }
    
        $next_id = $highest_id + 1;
        $input_id = "00$next_id";

      
         $user_password = $_POST['password'];

         $input_password = "google_oauth_$user_password";

         $current_date_time = date('y-m-d h-i-s');

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
            '$input_password',
            '$current_date_time'
        )";
    
        $sign_up = mysqli_query($conn, $add);

        if($sign_up){
            echo"success";
        }
     }

     $pascheck = password_verify("Ultimate", 0);
     
?>