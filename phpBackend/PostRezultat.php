<?php

header('Access-Control-Allow-Origin: *');
	if(	isset($_POST['Post']))
	{	
         $data =json_decode($_POST['Post'], true);
         $takmicenje=$data['takmicenje'];
         $mesto=$data['mesto'];
         $takmicar=$data['takmicar'];
         $brPoena=$data['brPoena'];
        // $new_data['ime']=$data['ime']."sssss";
        // $new_data['prezime']=$data['prezime']."aaaaa";
        
    $con = new mysqli('localhost:3306', 'root', '', 'takmicarko');
    if($con->connect_errno)
    {
        $aaa="greska";
    }
    else 
    {
        if($con->query("INSERT INTO takmici_se ( takmicarID, takmicenjeID, nagrada, br_poena) VALUES ( '$takmicar', '$takmicenje', '$mesto', '$brPoena')")===TRUE)
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