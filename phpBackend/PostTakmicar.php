

<?php

header('Access-Control-Allow-Origin: *');
	if(	isset($_POST['Post']))
	{	
         $data =json_decode($_POST['Post'], true);
         $ime=$data['ime'];
         $prezime=$data['prezime'];
         $mat=$data['jmbg'];
         $grad=$data['grad'];
         $mejl=$data['mejl'];
         $skola=$data['skola'];
         $datum=$data['datum'];
        // $new_data['ime']=$data['ime']."sssss";
        // $new_data['prezime']=$data['prezime']."aaaaa";
        
    $con = new mysqli('localhost:3306', 'root', '', 'takmicarko');
    if($con->connect_errno)
    {
        $aaa="greska";
    }
    else 
    {
        if($con->query("INSERT INTO takmicar ( ime, prezime, jmbg, mail, skolaID, grad,datumRodjenja) VALUES ( '$ime', '$prezime', '$mat', '$mejl', '$skola','$grad','$datum')")===TRUE)
            $text="Uspesno";
            else $text=$con->error;
    }
		echo json_encode($text);
	}
	else 
	{
		echo "Loading...";
	}
?>

