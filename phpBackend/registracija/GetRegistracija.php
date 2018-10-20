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
        $takmicari=$con->query("SELECT registracija.id,registracija.ime,registracija.prezime,registracija.korisnicko_ime,registracija.sifra,registracija.jmbg,registracija.email,skola.naziv,registracija.role,registracija.odobreno,registracija.skolaID FROM registracija,skola WHERE registracija.skolaID=skola.id;");			  
        $red=[];
        while($row = mysqli_fetch_assoc($takmicari))
        $red[] = $row;
    }
    
    echo json_encode(array(
        "red"=>$red
    ));

?>