<?php

$server = "localhost";
$port = 3306;
$password = " ";
$user="root";
$baza = "2ct-5-11-2024";
$polaczenie = new mysqli ($server,$port,$password,$user,$baza);
if(mysqli_connect_errno()!=0){
    echo "Brak połączenia z bazą danych" .mysqli_connect_error();
}else{
    echo "Połącznie z bazą danych";
}




?>