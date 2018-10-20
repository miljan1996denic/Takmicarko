import takmicenje from "./components/takmicenje/takmicenje";

export function getTakmicenja() {
    return  fetch('http://localhost:80/proba/phpBackend/GetTakmicenja.php', {
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
  }

export function postTakmicar() {
    let name=document.getElementById("ime").value;
    let lastName=document.getElementById("prezime").value;
    let mat=document.getElementById("jmbg").value;
    let city=document.getElementById("grad").value;
    let mail=document.getElementById("mejl").value;
    let skola=document.getElementById("skola").value;
    let datum=document.getElementById("datum").value;
    let data='Post= '+ JSON.stringify({ime:name, prezime:lastName, jmbg:mat,grad:city,mejl:mail,skola:skola,datum:datum});
    return  fetch('http://localhost:80/proba/phpBackend/PostTakmicar.php', {
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

export function getPredmeti() {
    return  fetch('http://localhost:80/proba/phpBackend/GetPredmeti.php', {
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
  }

export function getSpecUcenici(ident) {
    let data='Post= '+ JSON.stringify({id:ident});
    return  fetch('http://localhost:80/proba/phpBackend/GetTakmicariFromSchool.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type":"application/x-www-form-urlencoded"
      },
      body: data
   })
   .then((response)=> 
      response.json()
    )
    .then((response)=>response.red)
  }

  export function izbrisiTakmicara(id) {
    let data='Post= '+ JSON.stringify({id:id});
    return  fetch('http://localhost:80/proba/phpBackend/DeleteTakmicar.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type":"application/x-www-form-urlencoded"
      },
      body: data
   })
   .then((response)=> 
      response.json()
    )
    .then((response)=>response.red)
  }

export function getSkole() {
  console.log("Uso u fetch")
    return  fetch('http://localhost:80/proba/phpBackend/GetSkole.php', {
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
  }

export function updateTakmicar() {
    let name=document.getElementById("ime").value;
    let lastName=document.getElementById("prezime").value;
    let mat=document.getElementById("jmbg").value;
    let city=document.getElementById("grad").value;
    let mail=document.getElementById("mejl").value;
    let skola=document.getElementById("skola").value;
    let datum=document.getElementById("datum").value;
    let id=document.getElementById("hidden").value;
    let data='Post= '+ JSON.stringify({ime:name, prezime:lastName, jmbg:mat,grad:city,mejl:mail,skola:skola,id:id,datum:datum});
    console.log("Proba updatea",data)
    return  fetch('http://localhost:80/proba/phpBackend/UpdateTakmicar.php', {
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
  
export function getListaTakmicenja(id) {
    let data='Post1= '+ JSON.stringify({id:id});
    return  fetch('http://localhost:80/proba/phpBackend/GetTakmicenja.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type":"application/x-www-form-urlencoded"
      },
      body: data
   })
   .then((response)=> 
      response.json()
    )
    .then((response)=>response.lista)
 
    
  }

export function getListaZaTakmicara(id) {
    let data='Post2= '+ JSON.stringify({id:id});
    return  fetch('http://localhost:80/proba/phpBackend/takmicari/GetTakmicari.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type":"application/x-www-form-urlencoded"
      },
      body: data
   })
   .then((response)=> 
      response.json()
    )
    .then((response)=>response.lista)

  }

  
export function PostTakmicenje(idOrganizatora) {
  let data=null;
  let predmet=document.getElementById("predmetOrg").value;
  let mesto=document.getElementById("mestoOrg").value;
  let godina=document.getElementById("godinaOrg").value;
  let tip=document.getElementById("tipOrg").value;
  let razred=document.getElementById("razredOrg").value;
   data='Post= '+ JSON.stringify({predmet:predmet, mesto:mesto, godina:godina,tip:tip,idOrganizatora:idOrganizatora,razred:razred});
  return  fetch('http://localhost:80/proba/phpBackend/PostTakmicenje.php', {
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


export function GetTakmicenjaByOrgDB(ident) {
  let data='Post= '+ JSON.stringify({id:ident});
  return  fetch('http://localhost:80/proba/phpBackend/GetOrgTakmicenja.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type":"application/x-www-form-urlencoded"
    },
    body: data
 })
 .then((response)=> 
    response.json()
  )
  .then((response)=>response.red)
}



export function izbrisiTakmicenje(id) {
  let data='Post= '+ JSON.stringify({id:id});
  return  fetch('http://localhost:80/proba/phpBackend/DeleteTakmicenje.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type":"application/x-www-form-urlencoded"
    },
    body: data
 })
 .then((response)=> 
    response.json()
  )
  .then((response)=>response.red)
}

export function UpdateTakmicenje() {
  let predmet=document.getElementById("predmetOrg").value;
  let mesto=document.getElementById("mestoOrg").value;
  let godina=document.getElementById("godinaOrg").value;
  let tip=document.getElementById("tipOrg").value;
  let id=document.getElementById("hiddenOrg").value;
  let razred=document.getElementById("razredOrg").value
  let data='Post= '+ JSON.stringify({predmet:predmet, mesto:mesto, godina:godina,tip:tip,id:id,razred:razred});
  return  fetch('http://localhost:80/proba/phpBackend/UpdateTakmicenje.php', {
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

export function GetRegistrovane(){
  return fetch('http://localhost:80/proba/phpBackend/registracija/GetRegistracija.php', {
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
}
export function izbrisiRegistrovanog(id) {
  let data='Post= '+ JSON.stringify({id:id});
  return  fetch('http://localhost:80/proba/phpBackend/registracija/DeleteRegistracija.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type":"application/x-www-form-urlencoded"
    },
    body: data
  })
  .then((response)=> 
    response.json()
  )
  .then((response)=>response.red)
}

export function potvrdiProfesoraAdministratora(id){
  let data='Post= '+ JSON.stringify({id:id});
  return  fetch('http://localhost:80/proba/phpBackend/PotvrdiProfesora.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type":"application/x-www-form-urlencoded"
    },
    body: data
  })
  .then((response)=> 
    response.json()
  )
  .then((response)=>response.red)
}

export function dodajRezultat(){
  let takmicenje=document.getElementById("IzTakmicenja").value;
  let mesto=document.getElementById("mestoOrgRez").value;
  let takmicar=document.getElementById("TakmicarIdOrgRez").value;
  let brPoena=document.getElementById("brPoenaOrgRez").value;
  let data='Post= ' + JSON.stringify({takmicenje:takmicenje,mesto:mesto,takmicar:takmicar,brPoena:brPoena});
  isprazniFormu2();
  console.log("Proba",data)
  return  fetch('http://localhost:80/proba/phpBackend/PostRezultat.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type":"application/x-www-form-urlencoded"
    },
    body: data
  })
  .then((response)=> 
    response.json()
  )
  .then((response)=>response.red)
}

function isprazniFormu2(){
  document.getElementById("IzTakmicenja").value="";
  document.getElementById("mestoOrgRez").value="";
  document.getElementById("TakmicarIdOrgRez").value="";
  document.getElementById("brPoenaOrgRez").value="";
}

export function getAllUcenici() {
  return  fetch('http://localhost:80/proba/phpBackend/GetSviUcenici.php', {
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
}

export function getNeodobreneOrgan(){
  return  fetch('http://localhost:80/proba/phpBackend/GetNeodobreniOrg.php', {
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
}

export function Registrovani(){
  return  fetch('http://localhost:80/proba/phpBackend/GetSveRegistrovane.php', {
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
}