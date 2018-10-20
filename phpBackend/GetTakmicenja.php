<?php

header('Access-Control-Allow-Origin: *');

    $con = new mysqli('localhost', 'root', '', 'takmicarko');
    if($con->connect_errno)
    {
        $aaa="greska";
    }

    else 
    {
        $takmicari=$con->query("SELECT takmicenje.Id,predmet.naziv,takmicenje.grad,takmicenje.godina,takmicenje.tip,takmicenje.razred FROM takmicenje,predmet WHERE takmicenje.predmetID=predmet.id;");			  
        $red=[];
        while($row = mysqli_fetch_assoc($takmicari))
        $red[] = $row;

        if(	isset($_POST['Post1']))
	    {	
            $data =json_decode($_POST['Post1'], true);
            $id=$data['id'];
            $takmicariLista=$con->query("SELECT takmicar.ime, takmicar.prezime, takmici_se.nagrada, skola.naziv, takmici_se.br_poena 'brPoena'  FROM takmicar, takmici_se, skola  WHERE takmici_se.takmicarID=takmicar.id AND takmici_se.takmicenjeID='$id' AND skola.id=takmicar.skolaID ORDER BY takmici_se.br_poena DESC;");

            // $takmicariLista=$con->query("SELECT takmicar.ime, takmicar.prezime, takmici_se.nagrada  FROM takmicar INNER JOIN takmici_se ON takmici_se.takmicarID=takmicar.id WHERE takmici_se.takmicenjeID='$id';");
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
