

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
        if($con->query("UPDATE registracija SET odobreno='1' WHERE registracija.id = $id")===TRUE)
            $text="Uspesno update takmicar";
            else $text=$con->error;
    }
		echo json_encode($text);
	}
	else 
	{
		echo "Loading...";
	}
?>
