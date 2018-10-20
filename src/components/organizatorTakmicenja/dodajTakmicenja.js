import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {getPredmeti} from '../../store/action';
import {PostTakmicenje,updateTakmicenje,izTabeleTakmicar} from '../../store/action/organizatorActions';
import {getSviTakmicari} from '../../store/action/takmicariActions';
import {dodajRezultat} from '../../api';
import { Redirect } from 'react-router';
import $ from 'jquery'
import {selectpicker} from 'bootstrap-select';
import {select2} from 'bootstrap-select';


let pom=null;
class DodajTakmicenja extends Component {

    constructor(props){
        super(props);

        this.state={
            redirect: false,
            role:''
        }
    }

    componentDidMount(){
        this.props.getPredmeti();
        this.props.izTabeleTakmicar();
      
       
    }
   

    handleSubmits=()=>{
        
        if(this.props.item.role==="1"){
            pom=this.props.item;
            this.state.role=pom.role;
            this.state.redirect=true;
            this.forceUpdate();
        }
    }


    renderTakmicenja(){
        if(!this.props.takmicenja){
            return <option>Loading...</option>
        }
        return this.props.takmicenja.map(takmicenje=>{
            return(
               
                   <option value={takmicenje.id}>{takmicenje.naziv} {takmicenje.grad} {takmicenje.godina} {takmicenje.tip}</option>
               
            )
        })
    }

    renderPredmeti(){
        if(!this.props.predmeti){
            return <option>Loading...</option>
        }
        return this.props.predmeti.map(predmet=>{
            return(
               
                   <option value={predmet.id}>{predmet.naziv}</option>
               
            )
        })
    }

    renderTakmicari(){
        if(!this.props.takmicari){
            return <option>Loading...</option>
        }
        return this.props.takmicari.map(takmicar=>{
            return(
               
                   <option value={takmicar.id}>{takmicar.ime} {takmicar.prezime} {takmicar.grad}</option>
               
            )
        })
    }


    proveriInnerHtml(){
        if(document.getElementById("dodajTakmicenje").innerHTML==="Dodaj takmičenje"){
            this.props.PostTakmicenje(this.props.item);
            this.isprazniFormu();
        }
        if(document.getElementById("dodajTakmicenje").innerHTML==="Izmeni takmičenje"){
            this.props.updateTakmicenje(this.props.item);
            this.isprazniFormu();
        }
    }

    isprazniFormu(){
        document.getElementById("predmetOrg").value="";
        document.getElementById("mestoOrg").value="";
        document.getElementById("godinaOrg").value="";
        document.getElementById("tipOrg").value="";
        document.getElementById("dodajTakmicenje").innerHTML="Dodaj takmičenje";
        document.getElementById("razredOrg").value="";
    }
   
    render() {
        if(this.state.role==="1")
        {
            return <Redirect to={{
             pathname: '/superAdmin',
             state: { results: pom }
           }}/>
        }
        return (

                <div className=" col-lg-12 addL">
                <div className="selectTitle"> Dodaj/Izmeni takmičenje</div>
                <div className="formaL">
                    <div className="selectText tx">  Takmičenje iz predmeta:</div>
                    <select id="predmetOrg" className=" js-example-basic-single ">
                        <option value="">Izaberi</option>
                        {this.renderPredmeti()}
                    </select>
                    <div className="selectText tx">  Mesto održavanja:</div>
                    <input className="form-control in" id="mestoOrg"/>
                    <div className="selectText tx">  Godina: </div>
                    <input className="form-control in"  id="godinaOrg"/>
                    <div className="selectText tx">  Razred: </div>
                    <input type="number" min="1" max="8" className="form-control in"  id="razredOrg"/>
                    <div className="selectText tx "> Tip takmičenja:</div>
                    <select id="tipOrg" className=" js-example-basic-single ">
                        <option value="">Izaberi</option>
                        <option value="1">Opštinsko</option>
                        <option value="2">Okružno</option>
                        <option value="3">Državno</option>
                    </select>
                    
                    <input id="hiddenOrg" type="hidden" value=""/>
                    
                </div>
                <button id="dodajTakmicenje" onClick={()=>{this.proveriInnerHtml()}} className="btn btn-warning btn-lg link homeButton">Dodaj takmičenje</button>
               
           
               
                </div>
                
        );
    
    }
}

function MapStateToProps(state){
    return {
        predmeti:state.predmeti,
        takmicenja:state.Takmicenja,
        takmicari:state.ucenici
    }
}

function MapDispatchToProps(dispatch){
    return bindActionCreators({getPredmeti,PostTakmicenje,updateTakmicenje,getSviTakmicari,izTabeleTakmicar},dispatch)
}

export default connect(MapStateToProps,MapDispatchToProps)(DodajTakmicenja);