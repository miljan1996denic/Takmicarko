<?php

header('Access-Control-Allow-Origin: *');

    $con = new mysqli('localhost:3306', 'root', '', 'takmicarko');
    if($con->connect_errno)
    {
        $aaa="greska";
    }

    else 
    {
        ///get
        $takmicari=$con->query("SELECT DISTINCT takmicar.id,takmicar.ime,takmicar.prezime,takmicar.mail,takmicar.jmbg, takmicar.datumRodjenja, skola.naziv,takmicar.grad, predmet.naziv 'predmet'  FROM takmici_se, takmicenje, takmicar, skola, predmet WHERE predmet.id=takmicenje.predmetID AND takmici_se.takmicenjeID=takmicenje.id AND takmicar.id=takmici_se.takmicarID AND takmicar.skolaID=skola.id;");			  
        $red=[];
        while($row = mysqli_fetch_assoc($takmicari))
        $red[] = $row;

        if(	isset($_POST['Post2']))
	    {	
            $data =json_decode($_POST['Post2'], true);
            $id=$data['id'];
            $takmicariLista=$con->query("SELECT takmicenje.godina, takmicenje.tip, takmici_se.nagrada, takmicenje.razred, predmet.naziv, takmici_se.br_poena 'brPoena'  FROM takmicenje, takmici_se, predmet  WHERE takmici_se.takmicenjeID=takmicenje.id AND takmici_se.takmicarID='$id' AND predmet.id=takmicenje.predmetID ORDER BY takmici_se.br_poena DESC;");

            $lista=[];
            while($row1 = mysqli_fetch_assoc($takmicariLista))
            $lista[] = $row1;
        }
        else{
            $lista="greskaaa";
         }
       
    }
    
    echo json_encode(array(
        "red"=>$red,
        "lista"=>$lista
    ));

?>