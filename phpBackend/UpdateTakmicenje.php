<?php

header('Access-Control-Allow-Origin: *');
	if(	isset($_POST['Post']))
	{	
         $data =json_decode($_POST['Post'], true);
         $predmet=$data['predmet'];
         $mesto=$data['mesto'];
         $godina=$data['godina'];
         $tip=$data['tip'];
         $id=$data['id'];
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
        if($con->query("UPDATE takmicenje SET predmetID = '$predmet',grad='$mesto',godina='$godina',tip='$tip',razred='$razred' WHERE takmicenje.Id = $id")===TRUE)
            $text="Uspesno update takmicenje";
            else $text=$con->error;
    }
		echo json_encode($text);
	}
	else 
	{
		echo "Loading...";
	}
?>