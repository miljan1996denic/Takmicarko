import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {TakmicenjaByOrg,izTabeleTakmicar} from '../../store/action/organizatorActions';
import OrgItem from './orgItem';
import {dodajRezultat} from '../../api';
import DodajTakmicenja from './dodajTakmicenja';
import Odobriti from './odobriti';
import DodajRezultat from './dodajRezultat';
import { Redirect } from 'react-router';


let pom=null;
class SvaTakmicenja extends Component {

    constructor(props){
        super(props);

        this.state={
            redirect: false,
            role:''
        }
    }
    componentDidMount(){
        this.props.TakmicenjaByOrg(this.props.item);
        this.props.izTabeleTakmicar();

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
    handleSubmits=()=>{
        
        if(this.props.item.role==="1"){
            pom=this.props.item;
            this.state.role=pom.role;
            this.state.redirect=true;
            this.forceUpdate();
        }
    }

    renderTakmicenja1(){
        if(!this.props.takmicenja){
            return <li>Loading...</li>
        }
        return this.props.takmicenja.map(takmicenje=>{
            let obj={
                IDOrg:this.props.item,
                tak:takmicenje
            }
            return(
                    <OrgItem obj={obj}/> 
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


    render() {
        if(this.state.role==="1")
        {
            return <Redirect to={{
             pathname: '/superAdmin',
             state: { results: pom }
           }}/>
        }
        return (

            <div className="orgTakm row">

                <div className="col-lg-7 orgLeft">
                {/* <button Style="margin:10px;  margin-right:30px;" className={"btn backFilter link2 " + (this.props.item.role==="1" ? ' prikaz' : ' sakriveno') } onClick={this.handleSubmits}>vrati se nazad</button> */}

                <div className="kartice">
                    <nav Style="margin:4px 0px 0px 4px ;">  
                        <div class="nav nav-tabs bcg" id="nav-tab2" role="tablist">   
                            <button Style=" margin:0px; " className={"btn backFilter link2 " + (this.props.item.role==="1" ? ' prikaz' : ' sakriveno') } onClick={this.handleSubmits}>Vrati se nazad</button> 
                            <a class="nav-item nav-link active tabss" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Neodobreni profesori</a>    
                            <a class="nav-item nav-link tabss" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Moja takmičenja</a>    
                            <a class="nav-item nav-link tabss" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Dodaj rezultate takmičenja</a>
                          

                        </div>    
                    </nav>    
                    <div class="tab-content bcg" id="nav-tabContent">    
                         <div class="tab-pane fade show active " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" Style="margin-top:20px;">   
                             <Odobriti/>
                        </div>    
                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">   
                                            
                          {this.renderTakmicenja1()}

                        </div>    
                        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <DodajRezultat item={this.props.item}/>
                        </div>    
                    </div>  
                </div>
                    

                </div>
                <div className="col-lg-5 orgRight">
                    
                    <DodajTakmicenja item={this.props.item}/>

                </div>

           
            </div>

        );
    }
}

function MapStateToProps(state){
    return {
        takmicenja:state.Takmicenja,
        takmicari:state.ucenici

    }
}

function MapDispatchToProps(dispatch){
    return bindActionCreators({TakmicenjaByOrg,izTabeleTakmicar},dispatch)
}

export default connect(MapStateToProps,MapDispatchToProps)(SvaTakmicenja);