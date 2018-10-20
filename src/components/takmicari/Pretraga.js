import React, { Component } from 'react';
import {getSviTakmicariFiltriraj} from '../../store/action/takmicariActions';
//import {getSkole} from '../../store/action/takmicariActions';
import ListaTakmicara from '../takmicari/ListaTakmicara';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link} from 'react-router-dom';
import  $ from 'jquery';

import {getSkolaTakmicar} from '../../store/action/takmicariActions';
import {getPredmeti} from '../../store/action/takmicariActions';

class Pretraga extends Component {
    
    constructor(props){
        super(props)
        let predmeti=[];
        this.state = {
            keyword:'',
            grad:'',
            predmet:'',
            skola:''
        }
    }

    searchTakmicari= (event) =>{
        event.preventDefault();
     }
    changeEventHandlerGradovi=(event)=>{
        this.setState({
            grad:event.target.value
        })
        this.Filtriraj();
    }
    changeEventHandlerPredmeti=(event)=>{
        this.setState({
            predmet:event.target.value
        })
        this.Filtriraj();
    }
    changeEventHandlerGodina=(event)=>{
        this.Filtriraj();
    }
    handleChange = (event) =>{
        this.setState({
            keyword:event.target.value
        })
        this.Filtriraj();
    }
    Filtriraj=()=>{
        this.props.getSviTakmicariFiltriraj();
        
    }
    renderSkole=()=>{
        if(this.props.skola){
            return this.props.skola.map((item)=>{
                return(
                    <option>{item.naziv}</option>
                )
            })
        }
    }
    renderPredmeti=()=>{
        if(this.props.predmeti){
            return this.props.predmeti.map((item)=>{
                return(
                    <option>{item.naziv}</option>
                )
            })
        }
    }
    renderGrad=()=>{
        let grad=['Beograd','Novi Sad','Nis','Trebinje','Kragujevac','Subotica'];
        return grad.map((item)=>{
            return(
                <option>{item}</option>
            )
        })
    }
    renderGodina=()=>{
        let godina=['2000','1999','1998','1997','1996','1995'];
        return godina.map((item)=>{
            return(
                <option>{item}</option>
            )
        })

    }
    componentDidMount(){
        this.props.getSviTakmicariFiltriraj();
        this.props.getSkolaTakmicar();
        this.props.getPredmeti();
        
    }
  
    render() {
        return (
         <div className="row">

                <div className="col-lg-2 sidebarFilter">
                        <button className="btn backFilter">
                            <Link className='link2' to='/'>Vrati se nazad</Link> 
                        </button>        
                        <h5 className="selectTitle">Filteri:</h5>
                        <div className="selectBorder">

                            <div className="selectFilter">
                                <div className="selectText"> Grad:</div>
                                <select className="selectOptions"  id="ddlViewBy" onChange={this.changeEventHandlerGradovi}>
                                    <option value="">Izaberi...</option>
                                    {this.renderGrad()}
                                </select>
                            </div>
                        
                            <div className="selectFilter" onChange={this.Filtriraj}>
                                <div className="selectText"> Škola:</div>
                                <select id="skoladdl" className="selectOptions">
                                    <option value="">Izaberi...</option>
                                    {this.renderSkole()}
                                </select>
                            </div>
                            <div className="selectFilter" >
                                <div className="selectText"> Predmeti:</div>
                                <select id="predmetii" className="selectOptions" onChange={this.Filtriraj}>
                                    <option value="">Izaberi...</option>
                                    {this.renderPredmeti()}
                                </select>
                            </div>
                            <div className="selectFilter" >
                                <div className="selectText"> Godina rodjenja: </div>
                                <select id="godinaa" className="selectOptions" onChange={this.changeEventHandlerGodina}>
                                    <option value="">Izaberi...</option>
                                    {this.renderGodina()}
                                </select>
                            </div>
                        </div>
                </div>

                <div className="col-lg-10 takmicariBody ">
                    <div className="inputSearchT">
                        <form onSubmit={this.searchTakmicari}>
                            <input className="form-control" type="text" id="search" placeholder="Ime i prezime takmičara" value={this.state.keyword} onChange={this.handleChange}/>
                        </form>
                    </div>
                    
                    <ListaTakmicara />
                </div>
                
        </div>
        );
    }

}

function mapStateToProps(state){
    return{
        takmicari:state.takmicari,
        skola:state.skole,
        predmeti:state.predmeti
    }

}function mapDispatchToProps(dispatch){
    return bindActionCreators({getSviTakmicariFiltriraj,getSkolaTakmicar,getPredmeti},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Pretraga);