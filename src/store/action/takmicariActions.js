const URL_ROOT = 'http://localhost:3005';


  export function getSviTakmicari(){
    const request = fetch('http://localhost:80/proba/phpBackend/takmicari/GetTakmicari.php', {
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
        type: 'GET_SVI_TAKMICARI',
        payload:request
      }
  }

  export function getSviTakmicariFiltriraj(){
    const request = fetch('http://localhost:80/proba/phpBackend/takmicari/GetTakmicari.php', {
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
        type: 'GET_SVI_TAKMICARI_FILTRIRAJ',
        payload:request
      }
  }
 
  export function getPredmeti() {
    const request=fetch('http://localhost:80/proba/phpBackend/GetPredmeti.php', {
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
      type: 'PRIMI_PREDMETE',
      payload:request
    }
  }


  export function getSkolaTakmicar() {
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
      type: 'PRIMI_SKOLE',
      payload:request
    }
  }