<?php

header('Access-Control-Allow-Origin: *');
	if(	isset($_POST['Post']))
	{	
         $data =json_decode($_POST['Post'], true);
         $id=$data['id'];
        // $new_data['ime']=$data['ime']."sssss";
        // $new_data['prezime']=$data['prezime']."aaaaa";
        
    $con = new mysqli('localhost:3306', 'root', '', 'takmicarko');
    if($con->connect_errno)
    {
        $aaa="greska";
    }
    else 
    {
        if($con->query("DELETE from takmicenje WHERE takmicenje.id=$id")===TRUE)
            $text="Uspesno";
            else $text=$con->error;
        if($con->query("DELETE from organizuje WHERE organizuje.takmicenjeID=$id ")===TRUE)
            $text="Uspesno";
            else $text=$con->error;
        if($con->query("DELETE from takmici_se WHERE takmici_se.takmicenjeID=$id ")===TRUE)
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

