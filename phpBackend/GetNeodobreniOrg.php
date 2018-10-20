<?php

header('Access-Control-Allow-Origin: *');

    $con = new mysqli('localhost:3306', 'root', '', 'takmicarko');
    if($con->connect_errno)
    {
        $aaa="greska";
    }

    else 
    {
        ////GET
        $takmicari=$con->query("SELECT * FROM registracija, skola WHERE registracija.role=2 AND skola.id=registracija.skolaID AND registracija.odobreno=0;");			  
        $red=[];
        while($row = mysqli_fetch_assoc($takmicari))
        $red[] = $row;
    }
    
    echo json_encode(array(
        "red"=>$red
    ));

?>