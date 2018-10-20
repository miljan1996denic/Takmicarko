<?php

header('Access-Control-Allow-Origin: *');
	if(	isset($_POST['Post']))
	{	
         $data =json_decode($_POST['Post'], true);
         $ime=$data['ime'];
         $prezime=$data['prezime'];
         $korIme=$data['korisnickoime'];
         $sifra=$data['sifra'];
         $jmbg=$data['jmbg'];
         $email=$data['mail'];
         $role1=$data['role'];
         $skola=$data['skola'];

    $con = new mysqli('localhost:3306', 'root', '', 'takmicarko');
    if($con->connect_errno)
    {
        $aaa="greska";
    }
    else 
    {
        if($con->query("INSERT INTO registracija ( ime, prezime, korisnicko_ime, sifra, jmbg, email, skolaID, role , odobreno) VALUES ( '$ime', '$prezime', '$korIme', '$sifra','$jmbg','$email', $skola, $role1,'0')")===TRUE)
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