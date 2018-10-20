import React, { Component } from 'react';
import Dobrodosao from './dobrodosao';
import DodajTakmicara from './dodajTakmicara';
import Azuriranje from './azuriranje';

class ProfAdmin extends Component {
   
    componentDidMount(){
        document.getElementById("footer").style.background="rgb(45,178,171)";
        document.getElementById("btnLogg").style.visibility="  visible";

    }
    render() {

         let obj=this.props.location.state.results;
        // let obj={
        //     email: "bokistef96@yahoo.com",
        //     id:"28",
        //     ime :"Borisalv",
        //     jmbg:"11111",
        //     korisnicko_ime:"bokistef96",
        //     naziv:"bora",
        //     odobreno:"1",
        //     prezime :"Stefanovic",
        //     role:"1",
        //     sifra: "boki1000",
        //     skolaID:"1"
        // };
     
        return (
            <div>
                <Dobrodosao rec="profesor administrator" admin={obj} />
                <DodajTakmicara admin={obj}/>
            </div>
        );
    }
}

export default ProfAdmin;