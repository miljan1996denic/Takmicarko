

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
            $takmicenja=$con->query("SELECT * FROM takmicenje,organizuje,predmet WHERE takmicenje.Id=organizuje.takmicenjeID AND organizuje.organizatorID=$id AND takmicenje.predmetID=predmet.id;");			  
            $red=[];
            while($row = mysqli_fetch_assoc($takmicenja))
            $red[] = $row;

            echo json_encode(array(
                "red"=>$red
            ));
        }
    }
	else 
	{
		echo "Loading...";
	}
?>

