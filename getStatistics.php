<?php

include "dbFunctions.php";

$resultsFromArray = array();
$query = "SELECT * FROM statistics";

$result = mysqli_query($link, $query);


while ($row = mysqli_fetch_assoc($result)) {
    $resultsFromArray[] = $row;
    
}

mysqli_close($link);

echo json_encode($resultsFromArray);




?>

