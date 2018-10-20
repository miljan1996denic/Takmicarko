export default function(state={},action){
    switch(action.type){
        /*case 'GET_PREDMETI':
            return{...state,list:action.payload};*/
        case 'GET_REGISTRACIJA':
            return{...state,list:action.payload};
        case 'GET_SKOLA':
            return{...state,list:action.payload};
        case 'GET_SVI_TAKMICARI':
            return{...state,list:action.payload};
        case 'GET_SVI_TAKMICARI_FILTRIRAJ':
        {
            let pocetniNiz=action.payload;
            let filtriran=[];
            
            var e = document.getElementById("ddlViewBy");
            var GradCombo = e.options[e.selectedIndex].value;

            var e = document.getElementById("skoladdl");
            var SkolaCombo = e.options[e.selectedIndex].value;

            var e = document.getElementById("predmetii");
            var PredmetiCombo = e.options[e.selectedIndex].value;

            var e = document.getElementById("godinaa");
            var GodinaCombo = e.options[e.selectedIndex].value;

            var search=document.getElementById("search").value;
            
        
            pocetniNiz.forEach((element)=>{
                let imeprezime=element.ime.concat(" ").concat(element.prezime)
                if(element.grad.includes(GradCombo) && imeprezime.toUpperCase().includes(search.toUpperCase()) && element.naziv.includes(SkolaCombo) && element.predmet.includes(PredmetiCombo) && element.datumRodjenja.includes(GodinaCombo) )
                {
                    filtriran.push(element);              
                }
              });
             
            
            return{...state,list:filtriran}

        }
        default:
            return state;
    }
}


