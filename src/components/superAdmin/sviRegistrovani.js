import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {povuciRegistrovane,filtriraj} from '../../store/action/superAdminActions';
import Registrovan from './registrovan';

class SviRegistrovani extends Component {

    componentDidMount(){
        this.props.povuciRegistrovane();
    }

    renderRegistrovane(){
        if(!this.props.registrovani){
            return <li>Loading...</li>
        }
        
        return this.props.registrovani.map(registrovan=>{
            return(
                <Registrovan korisnik={registrovan}></Registrovan>
            )
        })
    }

    render() {
        return (
            <div className="sviRegistrovani">
          
                <div className="radiosWhole">
                        
                    <div className="radios"> <input onChange={()=>this.props.filtriraj()} type="radio" name="filter" value=""/> Svi </div>
                    
                    <div className="radios">   <input onChange={()=>this.props.filtriraj()} type="radio" name="filter" value="3" /> Profesori</div>

                    <div className="radios">    <input onChange={()=>this.props.filtriraj()} type="radio" name="filter" value="2"/> Organizatori</div> 
                 
                </div>
                <div>
                    <Registrovan registrovani={this.props.registrovani}></Registrovan>
                </div>
            </div>
        );
    }
}

function MapStateToProps(state){
    return {
        registrovani:state.registrovani
    }
}

function MapDispatchToProps(dispatch){
    return bindActionCreators({povuciRegistrovane,filtriraj},dispatch)
}

export default connect(MapStateToProps,MapDispatchToProps)(SviRegistrovani);