

<?php

header('Access-Control-Allow-Origin: *');
	if(	isset($_POST['Post']))
	{	
         $data =json_decode($_POST['Post'], true);
         $predmet=$data['predmet'];
         $mesto=$data['mesto'];
         $godina=$data['godina'];
         $tip=$data['tip'];
         $idOrganizatora=$data['idOrganizatora'];
         $razred=$data['razred'];
        // $new_data['ime']=$data['ime']."sssss";
        // $new_data['prezime']=$data['prezime']."aaaaa";
        
    $con = new mysqli('localhost:3306', 'root', '', 'takmicarko');
    if($con->connect_errno)
    {
        $aaa="greska";
    }
    else 
    {
        if($con->query("INSERT INTO takmicenje ( predmetID, grad, godina, tip,razred) VALUES ( '$predmet', '$mesto', '$godina', '$tip','$razred')")===TRUE)
            $text="Uspesno dodato takmicenje u bazu";
        else $text=$con->error;

        $id=$con->query("SELECT takmicenje.Id FROM takmicenje ORDER BY ID DESC LIMIT 1");      
        while($row = mysqli_fetch_assoc($id))
        $idTakmicenja = $row; //$idTakmicenja["Id"] //tu je id
        $idTakmicenjaZaUpis=$idTakmicenja["Id"];

        if($con->query("INSERT INTO organizuje ( organizatorID, takmicenjeID) VALUES ( '$idOrganizatora', '$idTakmicenjaZaUpis')")===TRUE)
            $text="Uspesno dodata relacija u bazu";
        else $text=$con->error;
    }
		echo json_encode($text); 
	}
	else 
	{
		echo "Loading...";
	}
?>

