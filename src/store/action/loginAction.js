

  export function postRegistracija() {
    let rolee=null;
    let skola=null;
    if(document.getElementById('radio1').checked)
    { 
      rolee=2;
      skola=1;
    }
    if(document.getElementById('radio2').checked)
    {
        rolee=3;
        skola=document.getElementById("SkolaProfesora").value;
    }
    
    let name=document.getElementById("ime").value;
    let lastName=document.getElementById("prezime").value;
    let email=document.getElementById("email").value;
    let jmbg=document.getElementById("jmbg").value;
    let userName=document.getElementById("korime").value;
    let password=document.getElementById("sifra").value;
    
    let data='Post= '+ JSON.stringify({ime:name, prezime:lastName, mail:email,jmbg:jmbg,korisnickoime:userName,sifra:password,skola:skola,role:rolee});
    return  fetch('http://localhost:80/proba/phpBackend/registracija/PostRegistracija.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type":"application/x-www-form-urlencoded"
      },
      body: data
   })
   .then((response)=> 
      response.text()
    )
    .then(response=>{
      
    })
  }

  export function getRegistracija() {
    const request=fetch('http://localhost:80/proba/phpBackend/registracija/GetRegistracija.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type":"application/x-www-form-urlencoded"
      },
      body: JSON.stringify({
        key:'test'
      })
   })
   .then((response)=> 
      response.json()
    )
    .then((response)=>response.red)
    
    return{
      type: 'GET_REGISTRACIJA',
      payload:request
    }
  }

  
  export function getSkola() {
    const request=fetch('http://localhost:80/proba/phpBackend/registracija/GetSkola.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type":"application/x-www-form-urlencoded"
      },
      body: JSON.stringify({
        key:'test'
      })
   })
   .then((response)=> 
      response.json()
    )
    .then((response)=>response.red)
    
    return{
      type: 'GET_SKOLA',
      payload:request
    }
  }
