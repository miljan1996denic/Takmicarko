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


let pom=null;
class DodajRezultat extends Component {

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
               
                   <option value={takmicenje.id}>{takmicenje.naziv} {takmicenje.grad} {takmicenje.godina}</option>
               
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
    
    dodajRezultat2(){
        dodajRezultat();
        // this.forceUpdate();
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
            <div className=" addL2">
                <div className="Kontejner">
                    <div className="row1 row">
                            <div className="col25">
                                Takmičenje:
                            </div>
                            <div className="col75">
                                <select id="IzTakmicenja" className="takmicenjeOrg" className=" js-example-basic-single selectOrg slct">
                                    <option>Izaberi</option>
                                    {this.renderTakmicenja()}
                                </select>
                            </div>
                        </div>
                        <div className="row1 row">
                            <div className="col25">
                                Osvojeno mesto:
                            </div>
                            <div className="col75">
                                <input  id="mestoOrgRez" className="slct"/>
                            </div>
                        </div>
                        <div className="row1 row">
                            <div className="col25">
                                Takmičar:
                            </div>
                            <div className="col75">
                                <select id="TakmicarIdOrgRez" className=" js-example-basic-single selectOrg slct">
                                <option value="">Izaberi</option>
                                {this.renderTakmicari()}
                                </select>
                            </div>
                        </div>
                        <div className="row1 row">
                            <div className="col25">
                                Broj poena:
                            </div>
                            <div className="col75">
                                <input id="brPoenaOrgRez" className="slct"/>
                            </div>
                        </div>
                        <div className="row1 row">
                        <input id="hiddenOrg" type="hidden" value=""/>
                        <button id="dodajRezultat" onClick={this.dodajRezultat2}
                            className="btn btn-warning btn-lg link homeButton btv">Dodaj rezultat</button>
                        </div>
                        <br/>
                    </div>
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

export default connect(MapStateToProps,MapDispatchToProps)(DodajRezultat);