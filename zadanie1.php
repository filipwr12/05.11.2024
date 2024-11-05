<?php include_once ("polaczenie.php"); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php
    $zapytanie = $polaczenie->query(query: "SELECT gory.nazwa from gory;");
    while(list($nazwaGory)=mysqli_fetch_row(result: $zapytanie)){
        echo"<li>" ."$nazwaGory"."</li>";
    }
    ?>
    
</body>
</html>

<?php $polaczenie ->close(); ?>