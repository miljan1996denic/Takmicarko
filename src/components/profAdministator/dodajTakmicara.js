import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {postTakmicar,getSkole,updateTakmciar} from '../../store/action/adminActions';
import { Redirect } from 'react-router';
import Azuriranje from './azuriranje';

let pom=null;
class DodajTakmicara extends Component {

    constructor(props){
        super(props);

        this.state={
            redirect: false,
            role:''
        }
    }

    handleSubmits=()=>{
        
        if(this.props.admin.role==="1"){
            pom=this.props.admin;
            this.state.role=pom.role;
            this.state.redirect=true;
            this.forceUpdate();
        }
    }

    componentDidMount(){
        this.props.getSkole();
    }

    proveriInnerHtml(){
        console.log("uso u proveri inerhtml")
        if(document.getElementById("dodaj").innerHTML==="Dodaj takmičara"){
            console.log("uso u proveri inerhtml dodaj")
            this.props.postTakmicar(this.props.admin);
            this.isprazniFormu();
        }
        if(document.getElementById("dodaj").innerHTML==="Izmeni takmičara"){
            console.log("uso u proveri inerhtml azuriraj")
            this.props.updateTakmciar(this.props.admin);
            this.isprazniFormu();
        }
    }
    isprazniFormu(){
        document.getElementById("ime").value="";
        document.getElementById("prezime").value="";
        document.getElementById("jmbg").value="";
        document.getElementById("grad").value="";
        document.getElementById("hidden").value="";
        document.getElementById("mejl").value="";
        document.getElementById("dodaj").innerHTML="Dodaj takmičara"; //nece nesto
        document.getElementById("skola").value="";
        document.getElementById("datum").value="";
    }

    renderSchools(){
        if(!this.props.skole){
            return <option>Loading...</option>
        }
        return this.props.skole.map(skola=>{
            return(
                <option value={skola.id}>{skola.naziv} {skola.grad}</option>
            )
        })
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
            <div className="row profContent">
                <div className="col-lg-7 profItems">
                    <button Style="margin:10px; float:left; margin-right:30px;" className={"btn backFilter link2 " + (this.props.admin.role==="1" ? ' prikaz' : ' sakriveno') } onClick={this.handleSubmits}>Vrati se nazad</button>
                    <div >
                        <Azuriranje admin={this.props.admin}/>
                    </div>
                </div>
                
                <div className="col-lg-5 addL">
                    <div className="selectTitle"> Dodaj/Izmeni takmičara</div>
                    <div className="formaL">
                        <div className="selectText tx"> Ime:</div>
                        <input className="form-control in" id="ime" />
                        <div className="selectText tx"> Prezime:</div>
                        <input className="form-control in" id="prezime"/>
                        <div className="selectText tx"> JMBG:</div>
                        <input className="form-control in"  id="jmbg"/>
                        <div className="selectText tx "> Grad:</div>
                        <input className="form-control in" id="grad"/>
                        <div className="selectText tx "> E-mail:</div>
                        <input className="form-control in" id="mejl"/>
                        <div className="selectText tx "> Datum rodjenja:</div>
                        <input type="date" className="form-control in" id="datum"/>
                        <input id="hidden" type="hidden" value=""/>
                        <div className="selectText tx "> Škola:</div>

                        <select id="skola" className=" js-example-basic-single ">
                             <option>Izaberite</option>
                            {this.renderSchools()}
                        </select>
                    </div>
                    <button id="dodaj" onClick={()=>{this.proveriInnerHtml()}} className="btn btn-warning btn-lg link homeButton">Dodaj takmičara</button>
                </div>
           </div>
        );
    }
}

function MapStateToProps(state){
    return {
        skole:state.skole
    }
}

function MapDispatchToProps(dispatch){
    return bindActionCreators({postTakmicar,getSkole,updateTakmciar},dispatch)
}

export default connect(MapStateToProps,MapDispatchToProps)(DodajTakmicara);