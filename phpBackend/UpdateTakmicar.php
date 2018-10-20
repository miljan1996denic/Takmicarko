

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
         $id=$data['id'];
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
        if($con->query("UPDATE takmicar SET ime = '$ime',prezime='$prezime',jmbg='$mat',mail='$mejl',skolaID=$skola,datum='$datum' WHERE takmicar.id = $id")===TRUE)
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

