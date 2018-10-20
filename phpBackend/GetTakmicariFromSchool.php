

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
            $takmicari=$con->query("SELECT * FROM takmicar WHERE takmicar.skolaID=$id;");			  
            $red=[];
            while($row = mysqli_fetch_assoc($takmicari))
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

