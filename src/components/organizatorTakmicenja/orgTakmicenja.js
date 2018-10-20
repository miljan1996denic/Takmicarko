import React, { Component } from 'react';
import DodajTakmicenja from './dodajTakmicenja';
import SvaTakmicenja from './svaTakmicenja';
import Odobriti from './odobriti';
import Dobrodosao from '../profAdministator/dobrodosao';

class OrgTakmicenja extends Component {

    componentDidMount(){
        

    }
    render() {
        document.getElementById("footer").style.background="rgb(45,178,171)";
        document.getElementById("btnLogg").style.visibility="  visible";

    // let obj={
    //     email: "bokistef96@yahoo.com",
    //     id:"1",
    //     ime :"Borisalv",
    //     jmbg:"11111",
    //     korisnicko_ime:"zoki",
    //     naziv:"bora",
    //     odobreno:"1",
    //     prezime :"Stefanovic",
    //     role:"1",
    //     sifra: "1",
    //     skolaID:"1"
    // };
         let obj=this.props.location.state.results;
       
        return (

            <div className="">
                <Dobrodosao rec="organizator takmicenja" admin={obj} />
                <SvaTakmicenja item={obj}/>
                
            </div>
        );
    }
}

export default OrgTakmicenja;