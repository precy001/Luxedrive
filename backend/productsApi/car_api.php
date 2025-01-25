<?php


    $host  = "localhost";
    $user = "root";
    $password = "";
    $dbname = "luxedrive";

    $conn = mysqli_connect(
        $host,
        $user,
        $password,
        $dbname
    );

    $response = array();

    if($conn){
        $query = "SELECT * FROM car_products";
        $result = mysqli_query($conn, $query);

        if($result){
            header("Content-Type: JSON");
            $i = 0;
            while($row = mysqli_fetch_assoc($result)){
                $response[$i]['path'] = $row['path'];
                $response[$i]['productName'] = $row['productName'];
                $response[$i]['category'] = $row['category'];
                $response[$i]['seats'] = $row['seats'];
                $response[$i]['luggages'] = $row['luggages'];
                $response[$i]['door'] = $row['door'];
                $response[$i]['fuel'] = $row['fuel'];
                $response[$i]['horsepower'] = $row['horsepower'];
                $response[$i]['engine'] = $row['engine'];
                $response[$i]['type'] = $row['type'];
                $response[$i]['drive'] = $row['drive'];
                $response[$i]['price'] = $row['price'];
                $response[$i]['make'] = $row['make'];
                $response[$i]['year'] = $row['year'];
                $i++;
            }
        }
        echo json_encode($response, JSON_PRETTY_PRINT);
    }
?>